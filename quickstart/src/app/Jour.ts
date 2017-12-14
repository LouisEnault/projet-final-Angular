import {Activite, ACTIVITES} from "./Activite";

export class Jour{
    Id:number;
    Activites:Activite[];
}

export const JOURS: Jour[] = [
    { Id:1,Activites:[ACTIVITES[0],ACTIVITES[1]]},
    { Id:2,Activites:[ACTIVITES[2],ACTIVITES[3]]},
    { Id:3,Activites:[ACTIVITES[4],ACTIVITES[5]]},
    { Id:4,Activites:[ACTIVITES[6],ACTIVITES[7]]}
]
