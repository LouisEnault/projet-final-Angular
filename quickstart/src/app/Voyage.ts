import {Destination, DESTINATIONS} from "./Destination";

export class Voyage{
    Id:number;
    Nom:String;
    Destinations:Destination[];
    Budget:number;
    NumberOfDays:number;
}

export const VOYAGES: Voyage[] = [
    { Id:1, Budget : 2000, Destinations :[ DESTINATIONS[0],DESTINATIONS[1]], Nom :"super voyage 1", NumberOfDays : 10},
    { Id:2, Budget : 1500,Destinations :[ DESTINATIONS[2],DESTINATIONS[3]], Nom :"super voyage 2", NumberOfDays : 14}
    ]
