import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlatformModule } from 'platform-service';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, PlatformModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
