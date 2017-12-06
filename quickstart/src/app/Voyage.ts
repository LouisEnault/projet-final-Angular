import {Destination} from "./Destination";

export class Voyage{
    Id:number;
    Destinations:number[];
}
export const VOYAGES: Voyage[] = [
    { Id:1,Destinations:[1,2]},
    { Id:2,Destinations:[3,4]}
    ]