import { Component } from '@angular/core';
import { PlatformService } from 'platform-service';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(public platform: PlatformService) {

    this.platform.runExternal(() => {
      console.log('run outside angularZone, on client only');
    });
    this.platform.runOnClient(() => {
      console.log('run on client, only');
    });
    this.platform.runOnServer(() => {
      console.log('run on server, only');
    });
  }
}
