import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderForm } from 'src/app/model/order.form';
import { ApiServiceService } from 'src/services/api-service.service';
import { AuthServiceService } from 'src/services/auth-service.service';
import { OrderServiceService } from 'src/services/order-service.service';
import { UserDetailsServiceService } from 'src/services/user-details-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{

  public requests:any=[]
  public fullNames!:string;
  public roles!:string; //! for not defining any value
  constructor(private api:ApiServiceService,
    private auth:AuthServiceService,
    private userStore:UserDetailsServiceService,
    private orderserv:OrderServiceService,
    private router:Router
    ){}
  
  ngOnInit() {
  
  this.userStore.getFullNameFromStore()
  .subscribe(val=>{
    let fullNameFromToken=this.auth.getFullNameFromToken();
    this.fullNames=val || fullNameFromToken
  });
  
  this.userStore.getRoleFromStore()
  .subscribe(val=>{
    let roleFromToken=this.auth.getRoleFromToken()
    this.roles=val || roleFromToken
  })
  
  this.orderserv.allDeliveredOrderForAdmin()
  .subscribe(val=>{
    this.requests=val;
  })
  
  }
  
  isRole(){
  if(this.roles=="Admin")
  return true;
  return false;
  }
  
  
  populate(item:OrderForm){
    this.orderserv.orderformobj=item
  }
}
