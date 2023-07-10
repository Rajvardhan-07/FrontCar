import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/app/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private baseUrl:string="https://localhost:7135/api/UserDetail/";

  private userPayload:any;

  constructor(
    private http:HttpClient,
    private route:Router

    ) {
      this.userPayload=this.decodedToken();
     }

  signUp(userObj:any){
    return this.http.post<any>(`${this.baseUrl}Registration`,userObj);

  }
  logIn(loginObj:any)
  {
    return this.http.post<any>(`${this.baseUrl}Login`,loginObj);

  }
  getUserById(custId:number){
    return this.http.get<User>("https://localhost:7135/api/UserDetail/GetUserById/"+custId)
  }
//
signOut()
{
  localStorage.clear();
 this.route.navigate(['login'])
}

//To Store the token in local storage
  storeToken(tokenValue:string){
    localStorage.setItem('token',tokenValue);
  }
//To get the token from local storage
  getToken(){
    return localStorage.getItem('token');
  }
//Use token to check logged in or not
  isLoggedIn():boolean{
    return !!localStorage.getItem('token');
  }

decodedToken(){
const jwtHelper=new JwtHelperService();
const token=this.getToken()!; //! beacuse it can be independent
//console.log(jwtHelper.decodeToken(token));
return jwtHelper.decodeToken(token);
}

getFullNameFromToken(){
if(this.userPayload){
return this.userPayload.unique_name;
}
}

getRoleFromToken(){
  if(this.userPayload){
  return this.userPayload.role;
  }

}

getId(){
  if(this.userPayload){
  return this.userPayload.primarysid;
  }

}
}
