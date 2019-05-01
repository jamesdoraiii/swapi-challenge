import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Challenge1Component } from './challenge1/challenge1.component';

import { SwapiAPIService } from "./swapi-api.service";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Challenge2Component } from './challenge2/challenge2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    Challenge1Component,
    Challenge2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SwapiAPIService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
