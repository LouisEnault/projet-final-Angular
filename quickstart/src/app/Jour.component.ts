import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Http} from "@angular/http";
import {JourService} from "./jour.service";
import {Jour} from "./Jour";

@Component({
    selector: 'JourComponent',
    templateUrl:`./Jour.Component.html`,styles:[`
    agm-map {
         height: 600px;
            }

  #map {
    height: 600px;
  }
}`],
})
export class JourComponent  implements OnInit{

    constructor(private http: Http, private router:Router, private _JourService:JourService ) { }


    jours:Jour[]=new  Array<Jour>();
    cegepLat: number = 45.535493;
    cegepLng: number = -73.493892;

    getJours():void{
        
            let promise = this._JourService.getJours();
        if(promise != null) {
            promise.then(a => this.jours = a);
        
    }
    }
    

    

    ngOnInit():void {
        this.getJours();
    }

}