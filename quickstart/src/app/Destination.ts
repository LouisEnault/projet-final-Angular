import {Jour} from "./Jour";
import {Transport, TRANSPORTS} from "./Transport";
import {Activite, ACTIVITES} from "./Activite";

export class Destination{
    Id:number;
    Lat:String;
    Long:String;
    Transport:Transport;
    Horraire:Activite[];
}

export const DESTINATIONS: Destination[] = [
    { Id:1,Lat:'120', Long: '125', Transport:TRANSPORTS[0], Horraire:[ACTIVITES[0]]},
    { Id:2,Lat:'3100', Long: '2500', Transport:TRANSPORTS[1], Horraire:[ACTIVITES[1]]},
    { Id:3,Lat:'1200', Long: '5500', Transport:TRANSPORTS[2], Horraire:[ACTIVITES[2]]},
    { Id:4,Lat:'8000', Long: '9000', Transport:TRANSPORTS[3], Horraire:[ACTIVITES[3]]},
]
