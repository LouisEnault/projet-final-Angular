import {Jour} from "./Jour";
import {Transport} from "./Transport";

export class Destination{
    Id:number;
    Lat:String;
    Long:String;
    Transport:Transport;
    Horraire:Jour[];
}
