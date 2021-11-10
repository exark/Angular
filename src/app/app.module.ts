import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RestComponent } from './rest/rest.component';
import { HttpClientModule } from "@angular/common/http";
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    RestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
