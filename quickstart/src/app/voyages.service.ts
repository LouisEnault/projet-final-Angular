/**
 * Created by 1551579 on 2017-12-06.
 */

import { Injectable } from '@angular/core';
import {Http, URLSearchParams, Headers, RequestOptions}       from '@angular/http';

import 'rxjs/add/operator/toPromise';
//import List = _.List;
import {Voyage} from "./Voyage";
import {Router} from "@angular/router";
import {Destination} from "./Destination";



@Injectable()
export class VoyagesService {

    constructor(private http: Http, private router: Router) { }

    searchUsers(query: string) : Promise<string[]>{

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
        return this.http.get('http://localhost:6696/api/Voyages/SearchUsers/'+query, options).toPromise()
            .then(res => {
                let users = new Array<string>();
                for(let s of res.json()){
                    users.push(s);
                }
                return users;
            },
            res => {
                console.log('Could not query users.');
            });
    }

    getUserFromVoyage(voyageId: number) : Promise<string[]>{

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

        return this.http.get('http://localhost:6696/api/Voyages/GetUsersFromVoyage/'+voyageId, options).toPromise()
            .then(res => {
                let users = new Array<string>();
                for(let s of res.json()){
                    users.push(s);
                }
                return users;
            },
            res => {
                console.log('Could not query users.');
            });
    }

    addUserToVoyage(user: string, voyageid: number) : Promise<boolean>{

        if(localStorage.getItem('Token') == null){
            this.router.navigate(['signin']);
            setTimeout(function(){
                alert("Vous n'êtes pas connecté. Veuiller vous connecter.");
            },100);
            return null;
        }

        let token = localStorage.getItem('Token');

        let data = {
            VoyageId: voyageid,
            Nom: user
        };

        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + token
        });
        let options = new RequestOptions({headers: headers});

        return this.http.post('http://localhost:6696/api/Voyages/AddUser', JSON.stringify(data), options).toPromise()
            .then(res => {
                console.log('Added user '+user+' to the voyage.');
                return true;
            },
            res => {
                console.log('Could not add user');
                return false;
            });
    }

    getVoyages(): Promise<Voyage[]> {

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

        return this.http.get('http://localhost:6696/api/Voyages/GetByUser', options).toPromise()
            .then(response => {

                let voyages : Voyage[] = new Array<Voyage>();

                for(let v of response.json()){
                    let voyage : Voyage = new Voyage();

                    voyage.Budget = v.Budget;
                    voyage.Nom = v.Nom;
                    voyage.Id = v.VoyageId;
                    voyage.NumberOfDays = v.NumberOfDays;
                    voyage.Cost = v.Cost;

                    voyages.push(voyage);
                }

                return voyages;
            }, response => {
                this.router.navigate(['signin']);
                setTimeout(function(){
                    alert("Vous n'êtes pas connecté. Veuiller vous connecter.");
                },100);
            });
    }

    createVoyage(inName: string, inBudget: number) : Promise<boolean> {

        if(localStorage.getItem('Token') == null){
            this.router.navigate(['signin']);
            setTimeout(function(){
                alert("Vous n'êtes pas connecté. Veuiller vous connecter.");
            },100);
            return null;
        }

        let token = localStorage.getItem('Token');

        let data = {
            Nom: inName,
            Budget: inBudget
        };

        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + token
        });
        let options = new RequestOptions({headers: headers});

        console.log(JSON.stringify(data));

        return this.http.post('http://localhost:6696/api/Voyages/Create', JSON.stringify(data), options).toPromise()
            .then(response => {
                return true;
            }, response => {
                return false;
            });
    }

    editVoyage(id: number, inName: string, inBudget: number) : Promise<boolean> {

        if(localStorage.getItem('Token') == null){
            this.router.navigate(['signin']);
            setTimeout(function(){
                alert("Vous n'êtes pas connecté. Veuiller vous connecter.");
            },100);
            return null;
        }

        let token = localStorage.getItem('Token');

        let data = {
            VoyageId: id,
            Nom: inName,
            Budget: inBudget
        };

        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + token
        });
        let options = new RequestOptions({headers: headers});

        console.log(JSON.stringify(data));

        return this.http.post('http://localhost:6696/api/Voyages/Edit', JSON.stringify(data), options).toPromise()
            .then(response => {
                return true;
            }, response => {
                return false;
            });
    }

}
