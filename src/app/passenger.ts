export class Passenger {
    ADT: number = 1;
    CHD: number = 0;
    INF: number = 0;

    isSelected: Boolean = false;
    
    constructor(values: Object ={}){
        Object.assign(this,values);
    }
}
