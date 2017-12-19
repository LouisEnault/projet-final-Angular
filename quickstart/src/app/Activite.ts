export class Activite{
    Id:number;
    Prix:number;
    Nom:String;
	DestinationId:number;
}

export const ACTIVITES: Activite[] = [
    { Id:1, Prix:20, Nom:'Plage', DestinationId:1},
    { Id:2, Prix:15, Nom:'Musée', DestinationId:1},
    { Id:3, Prix:3, Nom:'Monument cool', DestinationId:1},
    { Id:4, Prix:125, Nom:'Restaurant très cher', DestinationId:1},
    { Id:5, Prix:40, Nom:'Pêche', DestinationId:1},
    { Id:6, Prix:10, Nom:'Soccer', DestinationId:1},
    { Id:7, Prix:50, Nom:'Promenade ans la ville', DestinationId:1},
    { Id:8, Prix:200, Nom:'Manger un muffin', DestinationId:1}
]
