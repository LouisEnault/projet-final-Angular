import { Injectable } from '@angular/core';
import {Http, URLSearchParams, RequestOptions, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Destination} from "./Destination";

@Injectable()
export class DestinationsService {

    constructor(private http: Http) { }

    getDestinations(voyageId:string): Promise<Destination[]> {
        console.log('test1');

<<<<<<< HEAD
        let token = localStorage.getItem('Token');
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + token
        });

        let options = new RequestOptions({headers: headers});
        return this.http.get('http://localhost:6696/api/Destinations/GetDestinationsByVoyageId/' + voyageId , options).toPromise()
            .then(response => {
                console.log('test2');
                console.log(response.json());
                let DESTINATIONS:Destination[] = new Array<Destination>();

                return DESTINATIONS;
            });
       
=======
        return null;
>>>>>>> aa066e0fdb65787373eb52f024088976b5912e64
    }

}
