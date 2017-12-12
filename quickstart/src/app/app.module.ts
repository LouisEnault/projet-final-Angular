import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {AuthComponent} from "./auth.component";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {RegisterComponent} from "./register.component";
import {FormsModule} from "@angular/forms";
import {VoyagesComponent} from "./voyages.component";
import {VoyagesService} from "./voyages.service";



@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule,RouterModule.forRoot([
    {path: '', redirectTo: '/signin', pathMatch: 'full'},
    {path: 'signin', component: AuthComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'voyages', component: VoyagesComponent}/*,
    {path: 'destinations', component: DestinationsComponent}*/
  ]) ],
  providers: [VoyagesService],
  declarations: [ AppComponent, AuthComponent,RegisterComponent, VoyagesComponent ],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
