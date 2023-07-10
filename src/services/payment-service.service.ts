import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from 'src/app/model/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

  public payment:Card=new Card()

  constructor(private http:HttpClient) { }

  addPayment(){
    return this.http.post<Card>("https://localhost:7135/api/Payment/AddPayment",this.payment)
  }
}
