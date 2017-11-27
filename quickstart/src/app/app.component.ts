import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
})
export class AppComponent{
  artistes : Artiste[] = [new Artiste("Test Artiste")];
  addartiste(): void {
    aname : String = document.getElementById("aname").value;
    console.log(aname);
    if(aname.length !== 0){
      this.artistes.push(new Artiste(aname));
    }
  }

}

class Artiste{
  public nom : string;
  constructor(nom : string){
    this.nom = nom;
  }
}