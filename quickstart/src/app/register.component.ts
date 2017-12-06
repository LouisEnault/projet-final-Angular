import {Component} from '@angular/core';
import {Http, RequestOptions,Headers,} from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'RegisterComponent',
  templateUrl: `./register.component.html`,
})
export class RegisterComponent {

  constructor(private http: Http, private router:Router) { }



  username:string = '';
  password:string = '';
  ConPassword:string = '';


  register(): void {
    let data = {
      Email: this.username,
      Password: this.password,
      ConfirmPassword: this.ConPassword
    };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: headers});

    this.http.post('http://localhost:21288/api/Account/Register', JSON.stringify(data), options).toPromise()
      .then(response => { console.log('Account registered succesfully'); this.router.navigate(['signin']);},response => {console.log(response.json());alert("Error registering")});
  }





}
