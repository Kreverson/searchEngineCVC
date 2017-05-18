export class Room {
    numRooms: number = 1;
    numAdults: number = 1;
    numChilds: number = 0;
    ages:string;
    
    protected MAXROOM:number=2
    protected MAXADULTS:number=9
    protected MAXCHILDS:number=9

    constructor(values: Object ={}){
        Object.assign(this,values);
    }
    getAges():string{
    // lógica quartos
    this.ages = "30,7+30";
    return this.ages;
    }
}
