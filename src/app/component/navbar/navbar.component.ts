import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/services/auth-service.service';  

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private auth:AuthServiceService,
    private router:Router
    ){}

    public role:string="";
  isLoggedIn(){
    if(this.auth.isLoggedIn())
    return true;
    else
    return false;
  }
  logout(){
    this.auth.signOut();
  }

  isRole(){
    if(this.auth.getRoleFromToken()=='Admin')
    this.router.navigate(['admin'])
    else if(this.auth.getRoleFromToken()=='Customer')
    this.router.navigate(['customer'])
    else if(this.auth.getRoleFromToken()=='Washer')
    this.router.navigate(['washer'])
  }
}
