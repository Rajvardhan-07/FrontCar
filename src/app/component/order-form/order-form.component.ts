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

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {

  constructor(private router:Router,
    private toast:NgToastService,
    private userStore:UserDetailsServiceService,
    private auth:AuthServiceService,
  public orderser:OrderServiceService,
  private orderview:OrderCheckService
  
    ){}
    //public oredrobj!:OrderForm
   fullNames:string=""
   id:string=""
  
  ngOnInit():void{
    this.userStore.getId()
    .subscribe(val=>{
      let idFromToken=this.auth.getId();
      this.id=val || idFromToken
    });
  }
  
  
   onSave(myformdata:NgForm){
   this.orderser.orderformobj.custId=this.id
  let givendate=new Date(this.orderser.orderformobj.isScheduledLater)
  let todayDate=new Date()
  let giventime=givendate.getHours()
  console.log(giventime-2)
  
  let time1=new Date('2018-04-07 09:00:00')
  let time2=new Date('2018-04-07 18:00:00')
  
  if(givendate.getDate()>=todayDate.getDate() && giventime>time1.getHours() && giventime<time2.getHours()){
    // && giventime<=time2.getHours() && giventime>todayDate.getHours()+1
    if(givendate.getDate()==todayDate.getDate() && giventime>time1.getHours() && giventime<time2.getHours())
    {
      if(giventime>todayDate.getHours()+2){
      this.orderview.setDataForPreview(this.orderser.orderformobj)
      this.router.navigate(['/home','selectpackage','form','orderview'])
      }
     else{
      this.toast.error({detail:"ERROR",summary:"Change Time To 3Hr From Now",duration:5000});
     }
    }
    else if(givendate.getDate()>todayDate.getDate() && giventime>time1.getHours() && giventime<time2.getHours())
    {
      this.orderview.setDataForPreview(this.orderser.orderformobj)
      this.router.navigate(['/home','selectpackage','form','orderview'])
    }
    else
    {
      this.toast.error({detail:"ERROR",summary:"Service Time is 9AM to 6PM",duration:5000});
    }
  }
  else{
   this.toast.error({detail:"ERROR",summary:"Date is not valid",duration:5000});
  }
  
  
  
  
  
    }
  

}
