import {Destination, DESTINATIONS} from "./Destination";

export class Voyage {
    Id:number;
    Nom:String;
    Destinations:Destination[];
    Budget:number;
    NumberOfDays:number;
    Cost:number;
}