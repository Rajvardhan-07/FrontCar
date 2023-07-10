import { Component } from '@angular/core';
import { OrderForm } from 'src/app/model/order.form';
import { AuthServiceService } from 'src/services/auth-service.service';
import { OrderServiceService } from 'src/services/order-service.service';
import { UserDetailsServiceService } from 'src/services/user-details-service.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent {

  
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

    this.orderserv.AllPreviousOrderForCustomer(this.id)
    .subscribe(val=>{
      this.requests=val;
    })



  }

  isRole(){
    if(this.auth.getRoleFromToken()=="Customer")
    return true;
    return false;
    }

    changeToPaid(id:number){
      this.orderserv.getOrderById(id)
      .subscribe(val1=>{
        val1.paymentStatus="Paid"
        this.orderserv.updateOrder(val1)
        .subscribe(val2=>{
        })
      })
      window.location.reload();
    }

    populate(item:OrderForm){
      this.orderserv.orderformobj=item
    }


}
