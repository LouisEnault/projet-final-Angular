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

    getJours(id:String): Promise<Jour[]> {

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

        return this.http.get('http://localhost:6696/api/Journees/GetJournees/' + id , options).toPromise()
            .then(response => {
                console.log(response.json());
                let jours : Jour[] = new Array<Jour>();

                for (let v of response.json()){
                    let jour: Jour = new Jour();

                    jour.Id = v.JourneeId;
                    jour.Destination = new Destination();
                    jour.Destination.Id = v.DestinationId;
                    jour.Destination.Nom = v.Destination;
                    jour.Cout = v.cost;
                    jours.push(jour);
                }
                return jours;
            }, response => {});
    }
    createjour(destinationid: number ): Promise<boolean> {

        if(localStorage.getItem('Token') == null){
            this.router.navigate(['signin']);
            setTimeout(function(){
                alert("Vous n'êtes pas connecté. Veuiller vous connecter.");
            },100);
            return null;
        }

        let token = localStorage.getItem('Token');

        let data = {
            descId: destinationid
        };

        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + token
        });
        let options = new RequestOptions({headers: headers});

        console.log(JSON.stringify(data));

        return this.http.post('http://localhost:6696/api/jour/Create', JSON.stringify(data), options).toPromise()
            .then(response => {
                return true;
            }, response => {
                return false;
            });
    }
}
