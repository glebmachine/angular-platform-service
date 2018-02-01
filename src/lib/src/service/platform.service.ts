import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';

@Injectable()
export class PlatformService {
  isPlatformServer: boolean;
  isPlatformBrowser: boolean;
  isPlatformCordova: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private _ngZone: NgZone,
  ) {
    this.isPlatformServer = isPlatformServer(this.platformId);
    this.isPlatformBrowser = isPlatformBrowser(this.platformId);
    this.isPlatformCordova = !!window['cordova'];
  }

  runOnClient(code: () => void) {
    if (this.isPlatformBrowser) {
      code();
    }
  }

  runOnCordova(code: () => void) {
    if (this.isPlatformCordova) {
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
