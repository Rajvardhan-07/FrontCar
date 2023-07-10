import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsServiceService {

  private fullName$=new BehaviorSubject<string>("");//$because its an observable
  private role$=new BehaviorSubject<string>("");
  private id$=new BehaviorSubject<string>("");
    constructor() { }
  
    public getRoleFromStore(){
      return this.role$.asObservable();
    }
    public setRoleForStore(role:string){
      this.role$.next(role);
    }
  
    public getFullNameFromStore(){
     return this.fullName$.asObservable();
    }
  
    public setFullNameForStore(fullname:string){
      this.fullName$.next(fullname);
    }
  
    public getId(){
      return this.id$.asObservable();
     }
  
     public setId(id:string){
       this.id$.next(id);
     }
}
