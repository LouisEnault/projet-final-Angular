/**
 * Created by 1551579 on 2017-12-06.
 */

import { Injectable } from '@angular/core';
import { Http, URLSearchParams }       from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class VoyagesService {

    constructor(private http: Http) { }

    getGooglePlaces(): getVoyagesOfUser(id : number) {
        /*let params: URLSearchParams = new URLSearchParams();
        params.set('part','snippet');
        params.set('q',artist + ' ' + song);
        params.set('key','AIzaSyCCzxaKpLnzJ2QpKRDuO7qz-99SdUO3Io0');

        return this.http.get("https://www.googleapis.com/youtube/v3/search",{ params: params }).toPromise()
            .then(response => response.json().items[0].id.videoId);*/



    }

}
