import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxFormModule } from 'devextreme-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DxFormModule, DxButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
