import {Component, OnInit} from '@angular/core';
import {Http, RequestOptions,Headers,} from '@angular/http';
import {Router, ActivatedRoute} from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
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

    //createvoyageform
    formCreateVoyageName_in : string = "Un voyage";
    formCreateVoyageBudget_in : number = 100.00;

    formEditVoyageName_in : string = "Un voyage";
    formEditVoyageBudget_in : number = 100.00;
    formEditVoyageId_in : number = 0;

    createVoyagePopupOn : boolean = false;
    editVoyagePopupOn : boolean = false;

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

    editVoyage(voyage:Voyage):void{
        this.formEditVoyageName_in = voyage.Nom;
        this.formEditVoyageId_in = voyage.Id;
        this.formEditVoyageBudget_in = voyage.Budget;
        this.editVoyagePopupOn = true;
    }

    closeEditVoyage():void{
        this.editVoyagePopupOn = false;
    }

    editVoyageConfirm():void{
        this._VoyagesService.editVoyage(this.formEditVoyageId_in,this.formEditVoyageName_in,this.formEditVoyageBudget_in).then(a => {
            if(a){
                alert('Voyage modifié!');
                this.editVoyagePopupOn = false;
                this.getVoyage();
            }else{
                alert('Erreur: le voyage n\'a pas été modifié');
            }
        });
    }

    createVoyage():void{
        let promise = this._VoyagesService.createVoyage(this.formCreateVoyageName_in,this.formCreateVoyageBudget_in);

        if(promise != null){
            promise.then(a => {
                if(a){
                    alert('Voyage créé');
                    this.toggleCreateVoyagePopup(false);
                    this.getVoyage();
                }
                else{
                    alert('Erreur: le voyage n\'a pas été créé');
                }
            });
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

    toggleCreateVoyagePopup(a : boolean): void{
        this.createVoyagePopupOn = a;
    }

    ngOnInit(): void {
        this.itemNumber = 0;
        this.getVoyage();
    }



}
