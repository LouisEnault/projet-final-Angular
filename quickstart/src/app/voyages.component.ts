import {Component} from '@angular/core';
import {Http, RequestOptions,Headers,} from '@angular/http';
import {Router} from '@angular/router';

@Component({
    selector: 'RegisterComponent',
    templateUrl: `./register.component.html`,
})
export class VoyagesComponent {

    constructor(private http: Http, private router:Router) { }

    getPlaces(): void {
        
    }

    getVoyage(): void {

    }



}
