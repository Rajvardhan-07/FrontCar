import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ProductServiceService } from 'src/services/product-service.service';

@Component({
  selector: 'app-form-for-package',
  templateUrl: './form-for-package.component.html',
  styleUrls: ['./form-for-package.component.css']
})
export class FormForPackageComponent implements OnInit{

  packageForm!:FormGroup;

  constructor(private serv:ProductServiceService,
    private toast:NgToastService,
    private formBuilder:FormBuilder,
    private route:Router){}

ngOnInit(): void {
  this.packageForm = this.formBuilder.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    description: ['', Validators.required]
  });
}

  onSave(){
    if(this.packageForm.valid)
    this.serv.savePackage(this.packageForm.value)
    .subscribe({
      next:(res=>{
       this.toast.success({detail:"SUCCESS",summary:res.message,duration:5000});
       this.route.navigate(['admin/services'])

      }),
      error:(err=>{
       this.toast.error({detail:"ERROR",summary:"Something went wrong",duration:5000});
      })
    })
  }

}
