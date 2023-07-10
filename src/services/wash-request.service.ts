import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderForm } from 'src/app/model/order.form';

@Injectable({
  providedIn: 'root'
})
export class WashRequestService {

  constructor(
    private http:HttpClient
  ) { }

  getRequest(){
    //return this.http.get<any>("")
    return this.http.get<OrderForm>('https://localhost:7135/api/Order/GetAllRequest');
  }

  getsheduled(id:number){
    return this.http.get<OrderForm>("https://localhost:7135/api/Order/ScheduledWash/"+id)
  }

  scheduledWashForCustomer(id:number){
    return this.http.get<OrderForm>("https://localhost:7135/api/Order/ScheduledWashForCustomer/"+id)
  }
}
