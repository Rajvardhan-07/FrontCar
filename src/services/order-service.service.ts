import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderForm } from 'src/app/model/order.form';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  public orderformobj:OrderForm=new OrderForm()


  constructor(private http:HttpClient) { }
  
  addData(orderformobj1:OrderForm){

    return this.http.post<OrderForm>("https://localhost:7135/api/Order/AddOrder",orderformobj1)
  }
updateOrder(order:OrderForm)
{
  return this.http.put<OrderForm>("https://localhost:7135/api/Order/UpdateOrder",order)
}
getOrderById(id:number){
  return this.http.get<OrderForm>("https://localhost:7135/api/Order/GetOrder/"+id)
}

getAllPrevoiusOrder(id:number){
  return this.http.get<OrderForm>("https://localhost:7135/api/Order/AllPreviousOrder/"+id)
}
AllPreviousOrderForCustomer(id:number){
  return this.http.get<OrderForm>("https://localhost:7135/api/Order/AllPreviousOrderForCustomer/"+id)
}

allDeliveredOrderForAdmin(){
  return this.http.get<OrderForm>("https://localhost:7135/api/Order/AllDeliveredOrderForAdmin/")
}
}
