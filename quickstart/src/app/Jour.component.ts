import {Component, OnInit} from '@angular/core';
import {Router, Params, ActivatedRoute} from "@angular/router";
import {Http} from "@angular/http";
import {JourService} from "./jour.service";
import {Jour} from "./Jour";
//import VoidExpression = ts.VoidExpression;
import {isNumber} from "util";
import {Voyage} from "./Voyage";

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
    providers: [JourService]
})
export class JourComponent  implements OnInit{

    constructor(private http: Http, private router:Router, private _JourService:JourService ,private activatedRoute: ActivatedRoute) { }


    VoyageID: string;


    jours:Jour[]=new  Array<Jour>();
    cegepLat: number = 45.535493;
    cegepLng: number = -73.493892;

    getJours(id:string ):void{
        
            let promise = this._JourService.getJours(id);
        if(promise != null) {
            promise.then(a => this.jours = a);
        
    }
    }
    AddJour():void{

    }
    

    ngOnInit():void {
        console.log('help');
        this.activatedRoute.params.subscribe((params: Params) => {
            this.VoyageID=params['id'];
            console.log(this.VoyageID);
        });
        this.getJours('1');
    }

}