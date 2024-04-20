export class Bookings {
    bookingId:number
    mobileNo:string
    customerName:string
    rentType:string
    rentDuration:number
    rentDate : Date
    noOfCars:number
    carName:string
    carId:number

    constructor(){
        this.bookingId=0;
        this.mobileNo="";
        this.customerName="";
        this.rentType="Per Hour";
        this.rentDuration=0
        this.rentDate=new Date();
        this.noOfCars=0;
        this.carName="";
        this.carId=0;
    }
}
