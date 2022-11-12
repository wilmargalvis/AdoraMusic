import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './view/nav/nav.component';
import { ContentComponent } from './view/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
