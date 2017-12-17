import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {Http} from "@angular/http";
import {DestinationsService} from "./destinations.service";
import {Destination} from "./Destination";
import {Emplacement, GeocodeService} from "./geocode.service";
import {Transport} from "./Transport";

@Component({
    selector: 'DestinationsComponent',
    templateUrl: `./destinations.component.html`,styles:[`
    agm-map {
         height: 600px;
            }

  #map {
    height: 600px;
  }
  .modal-dialog{
    overflow-y: initial !important
}
.modal-body{
    height: 700px;
    overflow-y: auto;
}
}`],
})
export class DestinationsComponent  implements OnInit{

    constructor(private http: Http, private router:Router, private _DestinationsService:DestinationsService, private  _geoService:GeocodeService,private route: ActivatedRoute) { }

    VoyageId:number = 0;

    adresse: string = '';
    emplacement: Emplacement = { lat: 45.501459, lng: -73.567543, adresse: '' };
    PrixTransport : number = 0;
    typeTransportAdd:string = '';
    NbJours:number = 0;
    toggleAdd:boolean = false;
    toggleEdit:boolean = false;

    Editadresse: string = '';
    Editemplacement: Emplacement = { lat: 45.501459, lng: -73.567543, adresse: '' };
    EditPrixTransport : number = 0;
    typeTransportEdit:string = '';
    EditNbJours:number = 0;
    EditTransportId:number = 0;
    EditDestinationId:number = 0;

    destinations:Destination[] = Array<Destination>();
    cegepLat: number = 45.535493;
    cegepLng: number = -73.493892;

    getDestinations():void{
        this._DestinationsService.getDestinations(this.VoyageId).then(a => this.destinations = a);
    }
    geocode(): void {
        this._geoService.geocoder(this.adresse).then(e => this.emplacement = e);
    }


    addDest():void{
        let dest : Destination = new Destination;
        dest.VoyageId = this.VoyageId;
        dest.Lat = this.emplacement.lat;
        dest.Long = this.emplacement.lng;
        dest.NbJours = this.NbJours;
        dest.Nom = this.adresse;
        dest.Transport = new Transport();
        dest.Transport.Prix = this.PrixTransport;
        dest.Transport.Type = this.typeTransportAdd;
        this._DestinationsService.CreateDest(dest).then(e => {this.getDestinations();this.toggleAdd = !this.toggleAdd;});
    }
    deleteDest(Id:number):void{
        this._DestinationsService.DeleteDest(Id).then(e => {this.getDestinations();});
    }
    showEditPopUp(dest:Destination):void{
        this.Editadresse = dest.Nom;
        this.emplacement = { lat: dest.Lat, lng: dest.Long, adresse: dest.Nom };
        this.EditPrixTransport = dest.Transport.Prix;
        this.typeTransportEdit = dest.Transport.Type;
        this.EditNbJours = dest.NbJours;
        this.EditTransportId = dest.Transport.Id;
        this.EditDestinationId = dest.Id;
        this.toggleEdit = !this.toggleEdit;
    }
    editDest():void{
        let dest : Destination = new Destination;
        dest.Id = this.EditDestinationId;
        dest.VoyageId = 1;
        dest.Lat = this.emplacement.lat;
        dest.Long = this.emplacement.lng;
        dest.NbJours = this.EditNbJours;
        dest.Nom = this.Editadresse;
        dest.Transport = {Id : this.EditTransportId, Type: this.typeTransportEdit, Prix:this.EditPrixTransport};
        this._DestinationsService.EditDest(dest).then(e => {this.getDestinations();this.toggleEdit = !this.toggleEdit;})
    }
    

    ngOnInit():void {
        this.route.paramMap
            .subscribe(params => this.VoyageId = params.get('id'));
        this.getDestinations();
        console.log(this.destinations);
        //this.getDestinations();
    }

}
