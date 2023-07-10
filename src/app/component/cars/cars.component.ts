import { Component } from '@angular/core';
import { Car } from 'src/app/model/car.model';
import { CarServiceService } from 'src/services/car-service.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  constructor(private carservice:CarServiceService){}

public cars:any=[];

  ngOnInit(){
    this.carservice.getAllCars()
    .subscribe(data=>{
      this.cars=data;
    })
  }

  deletingOrder(id:number){
 this.carservice.deleteCar(id)
 .subscribe({
  next:(res=>{

   window.location.reload();
  })
 })
  }

}
