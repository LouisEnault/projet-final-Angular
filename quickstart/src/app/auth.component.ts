import {Component, OnInit} from '@angular/core';

import 'rxjs/add/operator/toPromise';
import {Http, RequestOptions, URLSearchParams, Headers} from '@angular/http';
import {Router} from '@angular/router';

@Component({
    selector: 'AuthComponent',
    templateUrl: `./auth.component.html`,
})
export class AuthComponent implements  OnInit {


    constructor(private http: Http, private router: Router) {
    }

    username: string = '';
    password: string = '';


    register(): void {
      this.router.navigate(['register']);
    }

    login(): void {
        let body: URLSearchParams = new URLSearchParams()
        body.set('grant_type', 'password');
        body.set('username', this.username);
        body.set('password', this.password);

        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({headers: headers});
        this.http.post('http://localhost:6696/Token', body, options).toPromise()
            .then(response => {
                console.log(response.json());
                localStorage.setItem('Token', response.json().access_token);
                this.router.navigate(['memos']);
            },response => alert("Wrong login informations")
            );
    }


    logout(): void {
        localStorage.removeItem('Token');
        this.router.navigate(['signin']);
    }

    ngOnInit(): void {
        this.logout();
    }
}
