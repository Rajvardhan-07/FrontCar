import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/services/auth-service.service';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthServiceService,private router:Router,private toast:NgToastService){}
  canActivate() :boolean{
  //use to guard page without login access
    if(this.auth.isLoggedIn())
    {
      return true;
    }
    else
    {
      this.toast.error({detail:"ERROR",summary:"Please Login First!"});
      this.router.navigate(['login']);
      return false;
    }
   return true;
  }
  

}
