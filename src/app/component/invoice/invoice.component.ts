import { Component } from '@angular/core';
import { OrderForm } from 'src/app/model/order.form';
import { OrderServiceService } from 'src/services/order-service.service';
import { InvoiceServiceService } from 'src/services/invoice-service.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {

  public invoices!:OrderForm[]
public invoice!:any;

constructor(
  private orderserv:OrderServiceService,
  private invoiceservice:InvoiceServiceService
  ){}

ngOnInit(){
 this.invoiceservice.getAllInvoice()
 .subscribe(res=>{
  this.invoices=res;
 })
}

populate(item:OrderForm){
  this.orderserv.orderformobj=item
}

}
