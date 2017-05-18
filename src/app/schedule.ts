export class Schedule {
    minDate: string;
    maxDate: string;
    minHour: string;
    maxHour: string;

    options = {
        showHours: false
    }
   
    constructor(values: Object ={}){
        Object.assign(this,values);
    }

    getListHours():any[]{
            let i = 0;
            let hours = [];
            while(i <= 24) {               
                hours.push((i<10? "0":"") + i + ":00");
                 i++;
            }
            return hours;
    }

}
