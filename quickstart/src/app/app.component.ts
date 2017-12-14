import { Component } from '@angular/core';
import {Http} from "@angular/http";
import {Router} from "@angular/router";

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
})
export class AppComponent{
  
  constructor(private http: Http, private router:Router) { }

  /*logout(): void {
    localStorage.removeItem('Token');
    this.router.navigate(['signin']);
  }*/
}