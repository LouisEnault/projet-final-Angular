import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Http} from "@angular/http";
import {DestinationsService} from "./destinations.service";
import {Destination} from "./Destination";
import {Emplacement, GeocodeService} from "./geocode.service";
import {Transport} from "./Transport";

@Component({
    selector: 'DestinationsComponent',
    templateUrl: `./destinations.component.html`,styles:[`
    agm-map {
         height: 600px;
            }

  #map {
    height: 600px;
  }
}`],
})
export class DestinationsComponent  implements OnInit{

    constructor(private http: Http, private router:Router, private _DestinationsService:DestinationsService, private  _geoService:GeocodeService) { }

    adresse: string = '';
    emplacement: Emplacement = { lat: 45.501459, lng: -73.567543, adresse: '' };
    PrixTransport : number = 0;
    NbJours:number = 0;
    Edit:boolean = false;
    toggle:boolean = false;

    destinations:Destination[] = Array<Destination>();
    cegepLat: number = 45.535493;
    cegepLng: number = -73.493892;

    getDestinations():void{
        this._DestinationsService.getDestinations('1').then(a => this.destinations = a);
    }
    geocode(): void {
        this._geoService.geocoder(this.adresse).then(e => this.emplacement = e);
    }


    addDest():void{
        var e = document.getElementById("typeTrans");
        var type = e.options[e.selectedIndex].text;
        let dest : Destination = new Destination;
        dest.VoyageId = 1;
        dest.Lat = this.emplacement.lat;
        dest.Long = this.emplacement.lng;
        dest.NbJours = this.NbJours;
        dest.Nom = this.adresse;
        dest.Transport = new Transport();
        dest.Transport.Prix = this.PrixTransport;
        dest.Transport.Type = type;
        this._DestinationsService.CreateDest(dest).then(e => {this.getDestinations();this.toggle = !this.toggle;});
    }
    deleteDest(Id:number):void{
        this._DestinationsService.DeleteDest(Id).then(e => {this.getDestinations();});
    }
    editDest(Id:number):void{
        this.Edit = true;
        this.toggle = !this.toggle;
    }
    confirmEdit():void{
        this.Edit = false;
    }
    

    ngOnInit():void {
        this.getDestinations();
        console.log(this.destinations);
        //this.getDestinations();
    }

}
