import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private baseUrl:string="https://localhost:7135/api";
  constructor(
    private http:HttpClient

  ){}

  //User Services Started


  getUser(){
    return this.http.get<any>(this.baseUrl+'UserDetail/GetUserDetails');
  }


  getWasher(){
    return this.http.get<any>(this.baseUrl+'UserDetail/GetWasherDetails');
  }

  getByIdUser(id:number){
    return this.http.get<any>(this.baseUrl+'UserDetail/GetUserById/'+id);
  }

  deleteUser(id:number){
    return this.http.delete<any>(this.baseUrl+'UserDetail/DeleteUserDetails/'+id);
  }
}
