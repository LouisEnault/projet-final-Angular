import {Component} from '@angular/core';
import {Http, RequestOptions,Headers,} from '@angular/http';
import {Router} from '@angular/router';
import {VoyagesService} from "./voyages.service";

@Component({
    selector: 'RegisterComponent',
    templateUrl: `./register.component.html`,
})
export class VoyagesComponent {

    constructor(private http: Http, private router:Router, private _VoyagesService: VoyagesService) { }

    getPlaces(): void {
        //this._VoyagesService.getVoyages()
    }

    getVoyage(): void {

    }



}
