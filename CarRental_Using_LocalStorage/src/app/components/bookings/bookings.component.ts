import { Component, OnInit } from '@angular/core';
import { Bookings } from '../../model/bookings';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Car } from '../../model/car';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent implements OnInit{


  formVisible:boolean = true
  bookings : Bookings[] = []
  booking : Bookings = new Bookings()
  carsList: Car[]=[]
  carKey : string = 'carRentalKey'
  bookingsKey : string = 'bookings'
  ngOnInit(): void {
    // debugger
    const carsData = localStorage.getItem(this.carKey);
    if(carsData !=null){
      this.carsList = JSON.parse(carsData)
    }

    const bookingsData = localStorage.getItem(this.bookingsKey)
    if(bookingsData !=null){
      this.bookings = JSON.parse(bookingsData)
    }
  }

  onSubmitBooking(){
    debugger
    if(this.booking.bookingId == 0){
      const carData = this.carsList.find(m => m.carId == this.booking.carId)
      if(carData != null){
        this.booking.carName = carData.carName
      }
      this.booking.bookingId = this.bookings.length + 1
      this.bookings.unshift(this.booking)
      localStorage.setItem(this.bookingsKey, JSON.stringify(this.bookings))
      this.onReset()
    }
  }

  onReset(){
    this.booking = new Bookings()
  }

}
