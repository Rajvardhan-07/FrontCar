import { Injectable } from '@angular/core';
import { OrderForm } from 'src/app/model/order.form';

@Injectable({
  providedIn: 'root'
})
export class OrderCheckService {

  constructor() { }

  orderformobj1:OrderForm=new OrderForm()
  
  sendDataForPreview(){
    return this.orderformobj1
  }
  setDataForPreview(orderobj:any){
    this.orderformobj1=orderobj
  }
}
