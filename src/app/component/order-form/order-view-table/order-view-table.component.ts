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

@Component({
  selector: 'app-order-view-table',
  templateUrl: './order-view-table.component.html',
  styleUrls: ['./order-view-table.component.css']
})
export class OrderViewTableComponent {

  paymetRequest:google.payments.api.PaymentDataRequest={
    apiVersion:2,
    apiVersionMinor:0,
    allowedPaymentMethods:[
      {
        type:'CARD',
        parameters:{
          allowedAuthMethods:['PAN_ONLY','CRYPTOGRAM_3DS'],
          allowedCardNetworks:['AMEX','MASTERCARD','VISA','MAESTRO']
        },
    tokenizationSpecification:{
      type:'PAYMENT_GATEWAY',
      parameters:{
        gateway:'example',
        gatewayMerchandId:'exampleGatewayMerchantId'
      }
    }
      }
    ],
    merchantInfo:{
      merchantId:'12344578901234567890',
      merchantName:'Demo Merchant'
    },
    transactionInfo:{
      totalPriceStatus:'FINAL',
      totalPriceLabel:'Total',
      totalPrice:'0.10',
      currencyCode:'EUR',
      countryCode:'BR'
    },
    callbackIntents:['PAYMENT_AUTHORIZATION']
  };

  onLoadPaymentData=(
    event:Event
  ):void=>{
    const eventDetails=event as CustomEvent<google.payments.api.PaymentData>;
    console.log('load payemt data',eventDetails.detail)
  }

  onPaymentDataAuthorized:google.payments.api.PaymentAuthorizedHandler=(
    paymentData
  )=>{
    console.log("payment authorized",paymentData)
    return{
      transactionState:'SUCCESS'
    };
  }

  onError=(event:ErrorEvent):void=>{
    console.error('error',event.error)
  }






  public fullNames:string=''
  public date:number=0
  public package:Package=new Package()
  public car:Car=new Car()
  public user:User=new User()

public orderobj:OrderForm=new OrderForm()
  constructor(
public orderser:OrderServiceService,
public orderview:OrderCheckService,
private userStore:UserDetailsServiceService,
private auth:AuthServiceService,
private packserv:ProductServiceService,
private carserv:CarServiceService,
private toast:NgToastService
  ){

  }

  ngOnInit(){

    this.userStore.getFullNameFromStore()
    .subscribe(val=>{
      let fullNameFromToken=this.auth.getFullNameFromToken();
      this.fullNames=val || fullNameFromToken
    });

    this.orderobj=this.orderview.sendDataForPreview()
    //this.orderobj.customerName=this.fullNames

    this.packserv.getpackageById(this.orderobj.packageId)
    .subscribe(val=>
      {
        this.package=val
      });

  }

  convertdate(){
  const date1 = new Date(this.orderobj.isScheduledLater);

 const formattedDateTime = date1.toLocaleString();

//console.log(formattedDateTime);
return formattedDateTime

  }

  populateform(oredrobjnew:OrderForm){
   this.orderobj=oredrobjnew
  }

  addData(orderformobj:OrderForm)
  {
    orderformobj.totalCost=orderformobj.totalCost+orderformobj.totalCost*0.10
    this.orderser.addData(orderformobj)
    .subscribe(val=>{
      // this.toast.success({detail:"SUCCESS",summary:"Ordered Successfully",duration:5000});
      window.localStorage.setItem("orderId", JSON.stringify(val.id));
      window.localStorage.setItem("carId", JSON.stringify(val.carId));
      window.localStorage.setItem("packageId", JSON.stringify(val.packageId));
      window.localStorage.setItem("addressId", JSON.stringify(val.addressId));
       window.location.reload()
    })
  }
}
