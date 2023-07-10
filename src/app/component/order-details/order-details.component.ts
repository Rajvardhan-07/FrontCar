import { Component } from '@angular/core';
import { Address } from 'src/app/model/address.model';
import { Car } from 'src/app/model/car.model';
import { OrderForm } from 'src/app/model/order.form';
import { Package } from 'src/app/model/package.model';
import { User } from 'src/app/model/user.model';
import { AddressServiceService } from 'src/services/address-service.service';
import { AuthServiceService } from 'src/services/auth-service.service';
import { CarServiceService } from 'src/services/car-service.service';
import { OrderServiceService } from 'src/services/order-service.service';
import { ProductServiceService } from 'src/services/product-service.service';
import { UserDetailsServiceService } from 'src/services/user-details-service.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {

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
  this.orderid=this.orderser.orderformobj.id
  this.addressId=this.orderser.orderformobj.addressId
  this.carId=this.orderser.orderformobj.carId
  this.packageId=this.orderser.orderformobj.packageId
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


}

}
