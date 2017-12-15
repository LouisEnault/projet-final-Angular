import { Injectable } from '@angular/core';
import { Http, URLSearchParams }       from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Destination} from "./Destination";

@Injectable()
export class DestinationsService {

    constructor(private http: Http) { }

    getDestinations(): Destination[] {

        return null;
    }

}
