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

    formUsersVoyageName_in : string = "";
    formUsersVoyageId_in : number = 0;

    createVoyagePopupOn : boolean = false;
    editVoyagePopupOn : boolean = false;
    usersVoyagePopupOn : boolean = false;

    voyageCurrentUsers : string[];
    voyageSearchUsers : string[];

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

    searchUsers(query: string): void{
        this._VoyagesService.searchUsers(query).then(a => {
            this.voyageSearchUsers = a;
        })
    }

    addUser(user: string):void{
        this._VoyagesService.addUserToVoyage(user,this.formUsersVoyageId_in).then(a => {
            if(a){
                alert("L'utilisateur a été ajouté!");
                this.openUserManagePopup(this.formUsersVoyageId_in);
            }
            else{
                alert("L'utilisateur n'existe pas.");
            }
        })
    }

    removeUser(user: string):void{
        this._VoyagesService.removeUserFromVoyage(user,this.formUsersVoyageId_in).then(a => {
            if(a){
                alert("L'utilisateur a été enlevé!");
                this.openUserManagePopup(this.formUsersVoyageId_in);
            }
            else{
                alert("L'utilisateur n'existe pas.");
            }
        })
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

    openUserManagePopup(voyageid:number):void{
        this._VoyagesService.getUserFromVoyage(voyageid).then(a => {
            this.voyageCurrentUsers = a;
            this.formUsersVoyageId_in = voyageid;
            this.usersVoyagePopupOn = true;
        })
    }

    replaceSearchedUser(user : string){
        this.formUsersVoyageName_in = user;
        this.voyageSearchUsers = new Array<string>();
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

    toggleUsersVoyagePopup(a : boolean): void{
        this.usersVoyagePopupOn = a;
    }

    ngOnInit(): void {
        this.itemNumber = 0;
        this.getVoyage();
    }



}
