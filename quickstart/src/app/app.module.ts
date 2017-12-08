import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
<<<<<<< HEAD
import {AuthComponent} from "./auth.component";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {RegisterComponent} from "./register.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule,RouterModule.forRoot([
=======
import {AuthComponent} from './auth.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {RegisterComponent} from "./register.component";

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule,RouterModule.forRoot([
>>>>>>> dad073d3f0a72e761a66bbdba731a59d19a2ef07
    {path: '', redirectTo: '/signin', pathMatch: 'full'},
    {path: 'signin', component: AuthComponent},
    {path: 'register', component: RegisterComponent}
  ]) ],
<<<<<<< HEAD
  declarations: [ AppComponent,AuthComponent, RegisterComponent],
  bootstrap:    [ AppComponent ]
=======
  declarations: [ AppComponent, AuthComponent,RegisterComponent ],
  bootstrap:    [ AppComponent, AuthComponent,RegisterComponent ]
>>>>>>> dad073d3f0a72e761a66bbdba731a59d19a2ef07
})
export class AppModule { }
