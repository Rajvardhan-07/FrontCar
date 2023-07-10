import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { forkJoin } from 'rxjs';
import { AuthServiceService } from 'src/services/auth-service.service';
import { UserDetailsServiceService } from 'src/services/user-details-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!:FormGroup;
  constructor(private fb:FormBuilder,
    private auth:AuthServiceService,
    private router:Router,
    private toast:NgToastService,
    private userStore:UserDetailsServiceService
    ){}
  ngOnInit():void{

    this.loginForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  onLogin(){
    if(this.loginForm.valid){
      this.auth.logIn(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          this.toast.success({detail:"SUCCESS",summary:res.message,duration:5000});
          this.loginForm.reset();
          this.auth.storeToken(res.token);
          const tokenPaylad=this.auth.decodedToken();
          this.userStore.setFullNameForStore(tokenPaylad.name)
          this.userStore.setRoleForStore(tokenPaylad.role)
          if(tokenPaylad.role =='Admin')
          this.router.navigate(['admin'])
          else if(tokenPaylad.role == 'Customer')
          this.router.navigate(['customer'])
          else if(tokenPaylad.role == 'Washer')
          this.router.navigate(['washer'])

        }
        //to print error
        ,error:(err)=>{
          //alert(err?.error.message);
          this.toast.error({detail:"ERROR",summary:"Something went wrong",duration:5000});

        }
      })
    }
    else{

      this.vaildateAllFormFields(this.loginForm);
      alert("Your form is invalid");
    }
  }

  private vaildateAllFormFields(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(field=>{
      const control=formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true})
      }
      else if(control instanceof FormGroup){
        this.vaildateAllFormFields(control)
      }
    })
  }

}
