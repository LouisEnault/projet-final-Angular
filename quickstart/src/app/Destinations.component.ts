import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Http} from "@angular/http";
import {DestinationsService} from "./destinations.service";
import {Destination} from "./Destination";
import {GeocodeService, Emplacement} from "./geocode.service";

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

    constructor(private http: Http, private router:Router, private _DestinationsService:DestinationsService, private  _geocodeService:GeocodeService) { }
    
    toggle:boolean = false;

    adresse: string = '';
    emplacement: Emplacement = { lat: 45.501459, lng: -73.567543, adresse: ''/*, bounds: null*/ };

    destinations:Destination[];
    cegepLat: number = 45.535493;
    cegepLng: number = -73.493892;

    getDestinations():void{
        this.destinations = this._DestinationsService.getDestinations();
        console.log(this.destinations);
    }

    geocode(): void {
        this._geocodeService.geocoder(this.adresse).then(em => this.emplacement = em);
    }


    getDestCost(dest:Destination):number{
        let cost : number = 0;
        cost+= dest.Transport.Prix;
        for(let jour of dest.Horaire){
            for(let act of jour.Activites){
                cost += act.Prix;
            }
        }
        return cost;
    }
    

    ngOnInit():void {
        this.getDestinations();
    }

}
