import {Jour} from "./Jour";
import {Transport, TRANSPORTS} from "./Transport";
import {Activite, ACTIVITES} from "./Activite";

export class Destination{
    Id:number;
    Nom:String;
    Lat:number;
    Long:number;
    Transport:Transport;
    NbJours:number;
}
