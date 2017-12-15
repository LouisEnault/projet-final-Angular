import {NgModule }      from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {AppComponent }  from './app.component';
import {AuthComponent} from "./auth.component";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {RegisterComponent} from "./register.component";
import {DestinationsComponent} from "./destinations.component";
import {FormsModule} from "@angular/forms";
import {VoyagesComponent} from "./voyages.component";
import {VoyagesService} from "./voyages.service";
import {DestinationsService} from "./destinations.service";
import {AgmCoreModule} from "@agm/core";
import {GeocodeService} from "./geocode.service";
import {JourComponent} from "./Jour.component";
import {JourService} from "./Jour.Service";

const googleMapsCore = AgmCoreModule.forRoot({
  apiKey : 'AIzaSyA8zzOx4IF3ytnhCY8nh22D93AeoHRERf0',
});

const Routes =RouterModule.forRoot([
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {path: 'signin', component: AuthComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'voyages', component: VoyagesComponent},
  {path: 'voyages/:VoyageId', component: VoyagesComponent},
  {path: 'destinations', component: DestinationsComponent},
  {path: 'destinations/:id', component: DestinationsComponent},
  {path: 'Jour', component: JourComponent},
  {path: 'Jour/:id', component: JourComponent}
]);


@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule,Routes,googleMapsCore ],
  providers: [VoyagesService, DestinationsService, GeocodeService, JourService],
  declarations: [ AppComponent, AuthComponent,RegisterComponent, VoyagesComponent, DestinationsComponent, JourComponent ],
  bootstrap:    [ AppComponent],
})
export class AppModule { }
