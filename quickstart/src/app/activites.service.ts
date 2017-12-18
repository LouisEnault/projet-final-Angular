import { Injectable } from '@angular/core';
import {Http, URLSearchParams, Headers, RequestOptions}       from '@angular/http';

import 'rxjs/add/operator/toPromise';
//import List = _.List;
import {Activite} from "./Activite";
import {Router} from "@angular/router";
import {Destination} from "./Destination";

@Injectable()
export class ActivitesService {

    constructor(private http: Http, private router: Router) { }
	
	getActivites(destinationId:number): Promise<Activite[]> {

        let token = localStorage.getItem('Token');
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + token
        });

        let options = new RequestOptions({headers: headers});
        return this.http.get('http://localhost:6696/api/activites/GetActivitesByDestinationId/' + destinationId , options).toPromise()
            .then(response => {
                console.log(response.json());
                let ACTIVITES:Activite[] = new Array<Activite>();
                for(let act of response.json()){
                    let activite : Activite = new Activite;
                    activite.Id = act.Id;
                    activite.Prix = act.prix;
                    activite.Nom = act.nom;
                    activite.DestinationId = act.DestinationId;
                    ACTIVITES.push(activite);
                }

                return ACTIVITES;
            });
    }

    getAllActivites(): Promise<Activite[]> {

        if(localStorage.getItem('Token') == null){
            this.router.navigate(['signin']);
            setTimeout(function(){
                alert("Vous n'êtes pas connecté. Veuiller vous connecter.");
            },100);
            return null;
        }

        let token = localStorage.getItem('Token');

        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + token
        });
        let options = new RequestOptions({headers: headers});

        return this.http.get('http://localhost:6696/api/activites', options).toPromise()
            .then(response => {

                let activites : Activite[] = new Array<Activite>();

                for(let v of response.json()){
                    let activite : Activite = new Activite();

                    activite.Id=v.id;
                    activite.Prix=v.prix
                    activite.Nom=v.nom

                    activites.push(activite);
                }

                return activites;
            }, response => {
                this.router.navigate(['signin']);
                setTimeout(function(){
                    alert("Vous n'êtes pas connecté. Veuiller vous connecter.");
                },100);
            });
    }
	
	CreateAct(act: Activite):Promise<boolean>{
        if(localStorage.getItem('Token') == null){
            this.router.navigate(['signin']);
            setTimeout(function(){
                alert("Vous n'êtes pas connecté. Veuiller vous connecter.");
            },100);
            return null;
        }
        console.log(act);

        let token = localStorage.getItem('Token');
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + token,
        });
        let options = new RequestOptions({headers: headers});
        let body = {
            AcvititeId : act.Id,
            NomActivite: act.Nom,
            PrixActivite: act.Prix,
            DestinationId : act.DestinationId

        };
        console.log(body);

        return this.http.post('http://localhost:6696/api/activites/Post', JSON.stringify(body), options).toPromise()
            .then(response =>{return true},reponse=> {return false});
    }

	DeleteAct(ID:number):Promise<boolean>{
        if(localStorage.getItem('Token') == null){
            this.router.navigate(['signin']);
            setTimeout(function(){
                alert("Vous n'êtes pas connecté. Veuiller vous connecter.");
            },100);
            return null;
        }

        let token = localStorage.getItem('Token');
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + token,
        });
        let options = new RequestOptions({headers: headers});
        let body = {
            ActiviteId:ID
        };
        console.log(body);

        return this.http.post('http://localhost:6696/api/activites/RemoveAct', JSON.stringify(body), options).toPromise()
            .then(response =>{return true},reponse=> {return false});
    }
	
	EditAct(act:Activite):Promise<boolean>{

            let token = localStorage.getItem('Token');
            let headers = new Headers({
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + token,
            });
            let options = new RequestOptions({headers: headers});
            let body = {
				AcvititeId : act.Id,
				NomActivite: act.Nom,
				PrixActivite: act.Prix,
				DestinationId : act.DestinationId

            };
            return this.http.post('http://localhost:6696/api/activites/EditAct', JSON.stringify(body), options).toPromise()
                .then(response =>{return true},reponse=> {return false});
    }
	
}