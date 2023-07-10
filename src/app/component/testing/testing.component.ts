import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Address } from 'src/app/model/address.model';
import { Car } from 'src/app/model/car.model';
import { OrderForm } from 'src/app/model/order.form';
import { UserDetailsServiceService } from 'src/services/user-details-service.service'
import { AuthServiceService } from 'src/services/auth-service.service';
import { OrderServiceService } from 'src/services/order-service.service';
import { OrderCheckService } from 'src/services/order-check.service';
import { Orders } from 'src/app/model/order.model';
import { Package } from 'src/app/model/package.model';
import { User } from 'src/app/model/user.model';
import { CarServiceService } from 'src/services/car-service.service';
import { ProductServiceService } from 'src/services/product-service.service';
import { AddressServiceService } from 'src/services/address-service.service';
import { WashRequestService } from 'src/services/wash-request.service';
import { RatingsServiceService } from 'src/services/ratings-service.service';
import { ApiServiceService } from 'src/services/api-service.service';
import { Rating } from 'src/app/model/rating.model';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent {

  washerRating!:number;
   user:User=new User();

  rating: Rating=new Rating();
  orderid=window.localStorage.getItem("orderId")
  constructor(
    private ratingserv:RatingsServiceService,
    private orderserv:OrderServiceService,
    private api:ApiServiceService
  ){
   this.api.getByIdUser(this.orderserv.orderformobj.washerId)
   .subscribe(val=>{
   this.user=val;
   })
  }

  rateWasher() {
    const rating1 = (document.getElementById('1') as HTMLInputElement).checked;
    const rating2 = (document.getElementById('2') as HTMLInputElement).checked;
    const rating3 = (document.getElementById('3') as HTMLInputElement).checked;
    const rating4 = (document.getElementById('4') as HTMLInputElement).checked;
    const rating5 = (document.getElementById('5') as HTMLInputElement).checked;

    //washerRating:any=0;
    if (rating1) {
      this.washerRating = 1;
    } else if (rating2) {
      this.washerRating = 2;
    } else if (rating3) {
      this.washerRating = 3;
    } else if (rating4) {
      this.washerRating = 4;
    } else if (rating5) {
      this.washerRating = 5;
    }

    this.rating.ratingsOfWasher = this.washerRating;
    this.rating.washerId=this.orderserv.orderformobj.washerId
    this.rating.orderId=this.orderserv.orderformobj.id
    this.ratingserv.addrating(this.rating)
    .subscribe(val=>{
      console.log(val);

    })



  console.log(this.washerRating)

  }

}
