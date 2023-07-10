import { Address } from "../model/address.model";
import { Car } from "./car.model";

export class OrderForm{
  id:number=0;
  isScheduledLater!:Date
  date_Time:Date=new Date()
  customerName:string="";
  status!:string
  paymentStatus!:string
  paymentId!:number
  phoneNumber!:number
  totalCost:number=0;
  instructions:string="";
  custId!:string;
  washerId:number=0;
  addressId:number=0;
  packageId:number=0;
  carId:number=0;
 address:Address=new Address()
 car:Car=new Car()

}