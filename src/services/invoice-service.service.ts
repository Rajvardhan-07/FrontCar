import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService {

  public invoices!:any[];
  public invoice!:any;


  constructor(private http:HttpClient) { }

  getAllInvoice(){
    return this.http.get<any>("https://localhost:7135/api/Order/GetAllOrder");
  }
}
