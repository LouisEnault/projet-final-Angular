import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {AuthComponent} from "./auth.component";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {RegisterComponent} from "./register.component";
import {DestinationsComponent} from "./Destinations.component";
import {FormsModule} from "@angular/forms";
import {VoyagesComponent} from "./voyages.component";
import {VoyagesService} from "./voyages.service";
import {DestinationsService} from "./DestinationsService";
import {AgmCoreModule} from "@agm/core";



@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule,AgmCoreModule.forRoot({
    apiKey : 'AIzaSyA8zzOx4IF3ytnhCY8nh22D93AeoHRERf0',
  }),RouterModule.forRoot([
    {path: '', redirectTo: '/signin', pathMatch: 'full'},
    {path: 'signin', component: AuthComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'voyages', component: VoyagesComponent},
    {path: 'destinations', component: DestinationsComponent}
  ]) ],
  providers: [VoyagesService, DestinationsService],
  declarations: [ AppComponent, AuthComponent,RegisterComponent, VoyagesComponent, DestinationsComponent ],
  bootstrap:    [ AppComponent],
})
export class AppModule { }
