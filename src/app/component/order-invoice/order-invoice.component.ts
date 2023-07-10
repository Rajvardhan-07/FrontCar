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

@Component({
  selector: 'app-order-invoice',
  templateUrl: './order-invoice.component.html',
  styleUrls: ['./order-invoice.component.css']
})
export class OrderInvoiceComponent {

  package:Package=new Package()
  order:OrderForm=new OrderForm()
  car:Car=new Car()
  address:Address=new Address()
  orderid:any
  packageId:any
  carId:any
  addressId:any
  user:User=new User()
  customerName:any
constructor(

  public orderser:OrderServiceService,
  private productserv:ProductServiceService,
  private carserv:CarServiceService,
  private addresserv:AddressServiceService,
  private auth:AuthServiceService,
  private userStore:UserDetailsServiceService
){
  //window.location.reload()
  this.orderid=window.localStorage.getItem("orderId")
  this.addressId=window.localStorage.getItem("addressId")
  this.carId=window.localStorage.getItem("carId")
  this.packageId=window.localStorage.getItem("packageId")
  this.customerName=window.localStorage.getItem("customerName")
  // console.log(window.localStorage.getItem("customerName"))
 // window.localStorage.clear()
}



ngOnInit(){
  // window.location.reload()
  this.productserv.getpackageById(this.packageId)
  .subscribe(val=>{
    this.package=val;
    // console.log("Product data",val)
  })
  this.orderser.getOrderById(this.orderid)
  .subscribe(val=>{
 this.order=val;
//  console.log("Order data",val)
  })

  this.carserv.getCarById(this.carId)
  .subscribe(val=>{
this.car=val
// /console.log("Car data",val)
  })

  this.addresserv.getAddressById(this.addressId)
  .subscribe(val=>{
    this.address=val
   // console.log("Address data",val)
  })


  this.userStore.getFullNameFromStore()
  .subscribe(val=>{
  let fullNameFromToken=this.auth.getFullNameFromToken();
  this.customerName=val || fullNameFromToken
});


}

}
