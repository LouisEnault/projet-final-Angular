import {Destination} from "./Destination";

export class Voyage {
    Id:number;
    Nom:string;
    Destinations:Destination[];
    Budget:number;
    NumberOfDays:number;
    Cost:number;
    Utilisateurs:string[];
}