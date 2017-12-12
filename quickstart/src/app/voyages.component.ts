import {Component, OnInit} from '@angular/core';
import {Http, RequestOptions,Headers,} from '@angular/http';
import {Router, ActivatedRoute} from '@angular/router';
import {VoyagesService} from "./voyages.service";
import {Voyage} from "./Voyage";

@Component({
    selector: 'VoyagesComponent',
    templateUrl: `./Voyages.Component.html`,
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
        this.voyages = this._VoyagesService.getVoyages();
    }

    getItemNumber():number{
        return this.itemNumber++;
    }

    details(pId:number):void{
      this.router.navigate(['destinations'])
    }
    getVoyageCost(pVoyage:Voyage):number{
      let total:number = 0;
      for(let Dest of pVoyage.Destinations){
        for(let act of Dest.Horraire){
          total+= act.Prix;
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
