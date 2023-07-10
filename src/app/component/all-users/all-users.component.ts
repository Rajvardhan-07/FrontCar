import { Component } from '@angular/core';
import { ApiServiceService } from 'src/services/api-service.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
  public users:any=[];

  constructor(private api:ApiServiceService,){}
  
    ngOnInit() {
      this.api.getUser()
      .subscribe(res=>{
      this.users=res;
      });
    }
  
  
  deletingUser(id:number){
    this.api.deleteUser(id)
    .subscribe({
     next:(res=>{
  
      window.location.reload();
     })
    })
   }

}
