import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RestComponent } from './rest/rest.component';
import { HttpClientModule } from "@angular/common/http";
import {CommonModule} from '@angular/common';
import {NgxPaginationModule} from "ngx-pagination";
import {Ng2OrderModule} from "ng2-order-pipe";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
