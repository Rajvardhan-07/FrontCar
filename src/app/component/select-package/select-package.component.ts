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
  selector: 'app-select-package',
  templateUrl: './select-package.component.html',
  styleUrls: ['./select-package.component.css']
})
export class SelectPackageComponent {

  constructor(
    private toast:NgToastService,
    private productserv:ProductServiceService,
    public orderser:OrderServiceService,

    ){}

  public packages:any=[];
  //public selectedPackage:any;

ngOnInit(){
this.productserv.getPackage()
.subscribe(res=>{
  this.packages=res;
});

}


populatePackage(selectedPackage:Package){
this.orderser.orderformobj.packageId=selectedPackage.id
this.orderser.orderformobj.totalCost=selectedPackage.price

}

}
