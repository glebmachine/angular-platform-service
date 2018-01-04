import { Component } from '@angular/core';
import { PlatformService } from 'platform-service';

@Component({
  selector: 'integration-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  meaning: number;
  constructor(libService: PlatformService) {
    this.meaning = libService.getMeaning();
  }
}
