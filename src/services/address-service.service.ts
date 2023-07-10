import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address } from 'src/app/model/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressServiceService {

  constructor(private http:HttpClient) { }

  getAddressById(id:number){
return this.http.get<Address>("https://localhost:7135/api/Address/GetAddress"+id)
  }
}
