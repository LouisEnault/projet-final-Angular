import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Http} from "@angular/http";
import {DestinationsService} from "./destinations.service";
import {Destination} from "./Destination";

@Component({
    selector: 'DestinationsComponent',
    templateUrl: `./Destinations.component.html`,styles:[`
    agm-map {
         height: 600px;
            }

  #map {
    height: 600px;
  }
}`],
})
export class DestinationsComponent  implements OnInit{

    constructor(private http: Http, private router:Router, private _DestinationsService:DestinationsService ) { }


    destinations:Destination[];
    cegepLat: number = 45.535493;
    cegepLng: number = -73.493892;

    getDestinations():void{
        this.destinations = this._DestinationsService.getDestinations();
        console.log(this.destinations);
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
