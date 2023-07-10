import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthServiceService } from 'src/services/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  signupForm!:FormGroup;
  constructor(private fb:FormBuilder,private auth:AuthServiceService,private router:Router,private toast:NgToastService){}

  ngOnInit():void{

    this.signupForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      phoneNumber:['',Validators.required],
      role:['',Validators.required]
    })
  }

  onSignUp(){
    if(this.signupForm.valid)
    {
    if(this.signupForm.value.role=='Washer' || this.signupForm.value.role=='Customer')
    { this.auth.signUp(this.signupForm.value)
     .subscribe({
      next:(res)=>{
       // alert(res.message);
       this.toast.success({detail:"SUCCESS",summary:res.message,duration:5000});
        this.signupForm.reset();
        this.router.navigate(['login']);
      },
      error:(err)=>{
        //alert(err?.error.message);
        this.toast.error({detail:"ERROR",summary:"Something went wrong",duration:5000});
      }
     })
    }
    else{
      this.toast.error({detail:"ERROR",summary:"Role should be Customer or Washer",duration:5000});
    }
    }
    else{

      this.vaildateAllFormFields(this.signupForm);
      this.toast.error({detail:"ERROR",summary:"Form is not valid",duration:5000});
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
