import {Jour} from "./Jour";
import {Transport} from "./Transport";

export class Destination{
    Id:number;
    Lat:String;
    Long:String;
    Transport:number;
    Horraire:number[];
}

export const DESTINATIONS: Destination[] = [
    { Id:1,Lat:'120', Long: '125', Transport:1, Horraire:[1]},
    { Id:2,Lat:'3100', Long: '2500', Transport:2, Horraire:[2]},
    { Id:3,Lat:'1200', Long: '5500', Transport:3, Horraire:[3]},
    { Id:4,Lat:'8000', Long: '9000', Transport:4, Horraire:[4]},
]
