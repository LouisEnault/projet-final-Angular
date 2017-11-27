import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
})
export class AppComponent{
 

}

class Artiste{
  public nom : string;
  constructor(nom : string){
    this.nom = nom;
  }
}