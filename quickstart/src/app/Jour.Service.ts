import { Injectable } from '@angular/core';
import {Http, URLSearchParams, Headers, RequestOptions}       from '@angular/http';

import 'rxjs/add/operator/toPromise';
//import List = _.List;
import {Jour} from "./Jour";
import {Router} from "@angular/router";
import {Destination} from "./Destination";

@Injectable()
export class JourService {

    constructor(private http: Http, private router: Router) { }

    getVoyages(): Promise<Jour[]> {

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

        return this.http.get('http://localhost:6696/api/Jour/GetAllJour', options).toPromise()
            .then(response => {

                let jours : Jour[] = new Array<Jour>();

                for(let v of response.json()){
                    let jour : Jour = new Jour();

                    //jour.Id=v.id;
                    //jour.destination=v.destination
                    //jour.cout=v.cout

                    jours.push(jour);
                }

                return jours;
            }, response => {
                this.router.navigate(['signin']);
                setTimeout(function(){
                    alert("Vous n'êtes pas connecté. Veuiller vous connecter.");
                },100);
            });
    }

}