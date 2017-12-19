import {Activite, ACTIVITES} from "./Activite";
import {Destination} from "./Destination";

export class Jour {
     // ordre du jour
    Id: number;
    Activites: Activite[];
    Destination: Destination;
    Cout: number;
}
