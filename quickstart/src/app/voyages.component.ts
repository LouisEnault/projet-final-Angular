import {Component, OnInit} from '@angular/core';
import {Http, RequestOptions,Headers,} from '@angular/http';
import {Router, ActivatedRoute} from '@angular/router';
import {VoyagesService} from "./voyages.service";
import {Voyage} from "./Voyage";

@Component({
    selector: 'VoyagesComponent',
    templateUrl: `./voyages.component.html`,
})
export class VoyagesComponent  implements OnInit{


    constructor(private http: Http, private router:Router, private _VoyagesService: VoyagesService) { }

    voyages : Voyage[] = new Array<Voyage>();

    itemNumber : number = 0;


    getPlaces(): void {
        //this._VoyagesService.getVoyages()
        this.voyages.indexOf(this.voyages[0]);
    }

    getVoyage(): void {
        let promise = this._VoyagesService.getVoyages();
        if(promise != null) {
            promise.then(a => this.voyages = a);
        }
    }

    getItemNumber():number{
        return this.itemNumber++;
    }

    detail(pId:number):void{
      this.router.navigate(['destinations/'+pId.toString()])
    }
    horaire(pId:number):void{
        this.router.navigate(['Jour/'+pId.toString()])
    }
    getVoyageCost(pVoyage:Voyage):number{
      let total:number = 0;
      for(let Dest of pVoyage.Destinations){
        for(let jour of Dest.Horaire){
            for(let act of jour.Activites) {
                total += act.Prix;
            }
        }
        console.log(Dest.Transport);
        total+= Dest.Transport.Prix;
      }
      return total;
    }

    ngOnInit(): void {
        this.itemNumber = 0;
        this.getVoyage();
    }



}
