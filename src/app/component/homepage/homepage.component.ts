import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/services/auth-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{

  constructor( private auth:AuthServiceService

    ){}
    
    ngOnInit(){
    
    }
    
    logout(){
      this.auth.signOut();
    }
    
    isLoggedIn(){
      if(this.auth.isLoggedIn())
      return true;
      return false;
    }
}
