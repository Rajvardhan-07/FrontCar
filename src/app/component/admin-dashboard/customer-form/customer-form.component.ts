import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit{

  editForm!:FormGroup;
  constructor(
    private fb:FormBuilder
  ){}
  
  ngOnInit(): void {
  
    this.editForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      phoneNumber:['',Validators.required]
  })
  }
  
  populateData(){
    if(this.editForm.value)
    {
    
    }
  }
}
