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
  selector: 'app-wash-request',
  templateUrl: './wash-request.component.html',
  styleUrls: ['./wash-request.component.css']
})
export class WashRequestComponent {

  public order:any=[];
  private userId:number=0
  constructor(
    private orderserv:OrderServiceService,
    private requestserv:WashRequestService,
    private userStore:UserDetailsServiceService,
    private auth:AuthServiceService
  ){
    this.userStore.getId()
    .subscribe(val=>{
      let idFromToken=this.auth.getId();
      this.userId=val || idFromToken
    });
  }

  ngOnInit(){
    this.requestserv.getRequest()
    .subscribe(val=>{
      this.order=val
    })

  }

  updateData(id:number){
    this.orderserv.getOrderById(id)
    .subscribe(val1=>{
     val1.washerId=this.userId
      this.orderserv.updateOrder(val1)
      .subscribe(val2=>{
        //console.log(val2);
      })
    })
   window.location.reload();
  }

  populate(item:OrderForm){
    this.orderserv.orderformobj=item
  }


}
