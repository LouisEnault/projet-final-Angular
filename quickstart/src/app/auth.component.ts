import {Component, OnInit} from '@angular/core';

import 'rxjs/add/operator/toPromise';
import {Http, RequestOptions, URLSearchParams, Headers} from '@angular/http';
import {Router} from '@angular/router';

@Component({
    selector: 'AuthComponent',
    templateUrl: `./auth.component.html`,
})
export class AuthComponent implements  OnInit {

    username : string;
    password : string;

    r_username : string;
    r_email : string;
    r_password : string;
    r_passwordc : string;

    form: string = "login";

    constructor(private http: Http, private router: Router) {
    }

    changeForm(form: string){
        this.form = form;
    }

    register(): void {

        if(this.r_username == null || this.r_username.length == 0){
            alert("Le nom d'utilisateur ne peut pas être vide");
            return;
        }

        if(this.r_email == null || this.r_email.length == 0 || !(this.r_email.indexOf('@') >= 0)){
            alert("L'adresse courriel est invalide");
            return;
        }

        if(this.r_password == null || this.r_password.length < 8){
            alert("Le mot de passe doit contenir au moins 8 charactères");
            return;
        }

        if(this.r_passwordc == null || this.r_password != this.r_passwordc){
            alert("Le mot de passe et la confirmation ne correspondent pas.");
            return;
        }

        let data = {
            Username: this.r_username,
            Email: this.r_email,
            Password: this.r_password,
            ConfirmPassword: this.r_passwordc
        };
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({headers: headers});

        console.log(JSON.stringify(data));

        this.http.post('http://localhost:6696/api/Account/Register', JSON.stringify(data), options).toPromise()
            .then(response => {
                this.form = "login";
                alert("Inscription complété!");
            }, response => {
                alert('Erreur: certaines informations sont incomplète: Vérifiez que le mot de passe contient au moins 8 charactères incluant des chiffres et des lettres en minuscule et majuscule et au moins un symbole. Exemple: "Passw0rd!"');
            });
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
                this.router.navigate(['voyages']);
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
