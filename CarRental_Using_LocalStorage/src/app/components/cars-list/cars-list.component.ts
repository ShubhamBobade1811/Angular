import { Component, OnInit } from '@angular/core';
import { Car } from '../../model/car';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.css'
})
export class CarsListComponent implements OnInit{


  carObj: Car = new Car();

  carsList: Car[] = []

  carKey : string = 'carRentalKey'

  formVisible : boolean = false;

  
  ngOnInit(): void {
    // debugger
    const localData = localStorage.getItem(this.carKey)
    if(localData != null){
      this.carsList = JSON.parse(localData)
    }
  }

  onSubmit(){
    // debugger
    if(this.carObj.carId ==0){
      this.carObj.carId= this.carsList.length +1
      this.carsList.push(this.carObj)
      localStorage.setItem(this.carKey,JSON.stringify(this.carsList))
      console.log(this.carsList);
      this.onReset()
    }
  }

  onReset(){
    this.carObj = new Car();
  }

}

