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

    getActivites(): Promise<Activite[]> {

        if(localStorage.getItem('Token') == null){
            this.router.navigate(['signin']);
            setTimeout(function(){
                alert("Vous n'�tes pas connect�. Veuiller vous connecter.");
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

                let activites: Activite[] = new Array<Activite>();

                for (let v of response.json()){
                    let activite: Activite = new Activite();

                    activite.Id = v.id;
                    activite.Prix = v.prix;
                    activite.Nom = v.nom;

                    activites.push(activite);
                }

                return activites;
            }, response => {
                this.router.navigate(['signin']);
                setTimeout(function(){
                    alert("Vous n'�tes pas connect�. Veuiller vous connecter.");
                },100);
            });
    }

}