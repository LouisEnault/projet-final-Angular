import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {AuthComponent} from "./auth.component";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {RegisterComponent} from "./register.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule,RouterModule.forRoot([
    {path: '', redirectTo: '/signin', pathMatch: 'full'},
    {path: 'signin', component: AuthComponent},
    {path: 'register', component: RegisterComponent}
  ]) ],
  declarations: [ AppComponent,AuthComponent, RegisterComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
