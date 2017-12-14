import {Jour, JOURS} from "./Jour";
import {Transport, TRANSPORTS} from "./Transport";
import {Activite, ACTIVITES} from "./Activite";

export class Destination{
    Id:number;
    Nom:String;
    Lat:number;
    Long:number;
    Transport:Transport;
    Horaire:Jour[];
}

export const DESTINATIONS: Destination[] = [
    { Id:1, Nom : "Centre bell",Lat:45.4960223, Long: -73.56925690000003, Transport:TRANSPORTS[0],   Horaire:[JOURS[0]]},
    { Id:2, Nom : "Somewhere2",Lat:12, Long: 52, Transport:TRANSPORTS[1], Horaire:[JOURS[1]]},
    { Id:3, Nom : "Somewhere3",Lat:12, Long: -78, Transport:TRANSPORTS[2], Horaire:[JOURS[2]]},
    { Id:4, Nom : "Somewhere4",Lat:45, Long: -73, Transport:TRANSPORTS[3], Horaire:[JOURS[3]]},
]
