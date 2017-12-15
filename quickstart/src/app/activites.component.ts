import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Http} from "@angular/http";
import {ActivitesService} from "./activites.service";
import {Activite} from "./Activite";
import {Emplacement} from "./geocode.service";

@Component({
    selector: 'ActivitesComponent',
    templateUrl: `./activites.component.html`,styles:[`
    agm-map {
         height: 600px;
            }

  #map {
    height: 600px;
  }
}`],
})
export class ActivitesComponent  implements OnInit{

    constructor(private http: Http, private router:Router, private _ActivitesService:ActivitesService ) { }

    adresse: string = '';
    emplacement: Emplacement = { lat: 45.501459, lng: -73.567543, adresse: '' };

    toggle:boolean = false;

    activites:Activite[] = Array<Activite>();
    cegepLat: number = 45.535493;
    cegepLng: number = -73.493892;

    getActivites():void{
		let promise = this._ActivitesService.getActivites();
        if(promise != null) {
            promise.then(a => this.activites = a);
        }
        console.log(this.activites);
    }    

    ngOnInit():void {
        this.getActivites();
    }

}
