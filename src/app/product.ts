import {Iproduct} from './Iproduct'
import {Room} from './Room'
import {Locale} from './Locale'
import {Passenger} from './Passenger'
import {Schedule} from './Schedule'

export class Product implements Iproduct {
    productType:string;
    rooms: Room;
    locale: Locale;
    passenger: Passenger;
    schedule: Schedule;
    directTrip: Boolean = false;
    flightAndHostel: Boolean = true;
    oneTrip: Boolean = false;
    validationMessage: string[] = [];

    constructor(productType:string){
        this.productType = productType;
        this.schedule = new Schedule();
        this.rooms = new Room();
        this.locale = new Locale();
        this.passenger = new Passenger();
        this.validationMessage = [];
    }
    setProductType(productType){
        this.productType = productType;
    }

}
