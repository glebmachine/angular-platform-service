import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';

@Injectable()
export class PlatformService {
  isPlatformServer: boolean;
  isPlatformBrowser: boolean;

  constructor(
    private _ngZone: NgZone,
   @Inject(PLATFORM_ID) private platformId: string
  ) {
    // this.isPlatformServer = isPlatformServer(this.platformId);
    this.isPlatformBrowser = isPlatformBrowser(this.platformId);
  }

  runOnClient(code: () => void ) {
    if (this.isPlatformBrowser) {
      code();
    }
  }

  runOnServer(code: () => void) {
    if (this.isPlatformServer) {
      code();
    }
  }

  runExternal(code: () => void) {
    this.runOnClient(() => {
      this._ngZone.runOutsideAngular(() => {
        code();
      });
    });
  }
}
