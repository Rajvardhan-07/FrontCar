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


@Component({
  selector: 'app-washer-dashboard',
  templateUrl: './washer-dashboard.component.html',
  styleUrls: ['./washer-dashboard.component.css']
})
export class WasherDashboardComponent {

  public requests:any=[]
  public fullName=this.auth.getFullNameFromToken();
  public id:number=0
  private order:OrderForm=new OrderForm()

  constructor(
    private auth:AuthServiceService,
    private orderserv:OrderServiceService,
    private userStore:UserDetailsServiceService
    ){
      this.userStore.getId()
      .subscribe(val=>{
        let idFromToken=this.auth.getId();
        this.id=val || idFromToken
      });
  }

  ngOnInit(){

    this.orderserv.getAllPrevoiusOrder(this.id)
    .subscribe(val=>{
      this.requests=val;
    })



  }

  isRole(){
    if(this.auth.getRoleFromToken()=="Washer")
    return true;
    return false;
    }

    changeToPaid(id:number){
      this.orderserv.getOrderById(id)
      .subscribe(val1=>{
        val1.paymentStatus="Paid"
        this.orderserv.updateOrder(val1)
        .subscribe(val2=>{
          console.log(val2);
        })
      })
      //window.location.reload();
    }

    populate(item:OrderForm){
      this.orderserv.orderformobj=item
    }

}
