import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Http} from "@angular/http";
import {DestinationsService} from "./destinations.service";
import {Destination} from "./Destination";

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

    constructor(private http: Http, private router:Router, private _DestinationsService:DestinationsService ) { }

<<<<<<< HEAD
    adresse: string = '';
    emplacement: Emplacement = { lat: 45.501459, lng: -73.567543, adresse: '' };
=======
>>>>>>> aa066e0fdb65787373eb52f024088976b5912e64

    destinations:Destination[] = Array<Destination>();
    cegepLat: number = 45.535493;
    cegepLng: number = -73.493892;

    getDestinations():void{
        //this.destinations = this._DestinationsService.getDestinations();
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
        console.log('WTFFFF');
        this._DestinationsService.getDestinations('1').then(a => this.destinations = a);
        console.log('WTFFFF');
        //this.getDestinations();
    }

}
