import { Injectable } from '@angular/core';
import {Http, URLSearchParams, RequestOptions, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Destination} from "./Destination";
import {Router} from "@angular/router";

@Injectable()
export class DestinationsService {

    constructor(private http: Http,  private router:Router) { }

    getDestinations(voyageId:string): Promise<Destination[]> {

        let token = localStorage.getItem('Token');
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + token
        });

        let options = new RequestOptions({headers: headers});
        return this.http.get('http://localhost:6696/api/Destinations/GetDestinationsByVoyageId/' + voyageId , options).toPromise()
            .then(response => {
                console.log(response.json());
                let DESTINATIONS:Destination[] = new Array<Destination>();
                for(let dest of response.json()){
                    let desti : Destination = new Destination;
                    desti.Id = dest.DestinationId;
                    desti.Lat = dest.Lat;
                    desti.Long = dest.Lng;
                    desti.NbJours = dest.NbJours;
                    desti.Nom = dest.NomLieu;
                    desti.VoyageId = dest.VoyageId;
                    DESTINATIONS.push(desti);
                }

                return DESTINATIONS;
            });
    }

    CreateDest(desti: Destination):Promise<boolean>{
        if(localStorage.getItem('Token') == null){
            this.router.navigate(['signin']);
            setTimeout(function(){
                alert("Vous n'êtes pas connecté. Veuiller vous connecter.");
            },100);
            return null;
        }
        console.log(desti);

        let token = localStorage.getItem('Token');
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + token,
        });
        let options = new RequestOptions({headers: headers});
        let body = {
            DestinationId : desti.Id,
            NomLieu: desti.Nom,
            Lat:desti.Lat,
            Lng:desti.Long,
            NbJours: desti.NbJours,
            PrixTransport : desti.Transport.Prix,
            TypeTransport : 'Train'/*desti.Transport.Type*/,
            VoyageId : desti.VoyageId

        };
        console.log(body);

        return this.http.post('http://localhost:6696/api/Destinations/Post', JSON.stringify(body), options).toPromise()
            .then(response =>{return true},reponse=> {return false});
    }

    DeleteDest(ID:number):Promise<boolean>{
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
            DestinationId:ID
        };
        console.log(body);

        return this.http.post('http://localhost:6696/api/Destinations/RemoveDest', JSON.stringify(body), options).toPromise()
            .then(response =>{return true},reponse=> {return false});
    }

}
