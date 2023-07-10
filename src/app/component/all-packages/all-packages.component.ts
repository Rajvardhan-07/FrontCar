import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Package } from 'src/app/model/package.model';
import { ApiServiceService } from 'src/services/api-service.service';
import { ProductServiceService } from 'src/services/product-service.service';

@Component({
  selector: 'app-all-packages',
  templateUrl: './all-packages.component.html',
  styleUrls: ['./all-packages.component.css']
})
export class AllPackagesComponent implements OnInit{

  constructor(
    private toast:NgToastService,
    private productserv:ProductServiceService){}

  public packages:any=[];
  //public selectedPackage:any;

ngOnInit(){
this.productserv.getPackage()
.subscribe(res=>{
  this.packages=res;
});

}



deletePackage(id:number){
if(confirm("Are you really want to delete this record ?"))
{
  this.productserv.deletePackage(id)
  .subscribe({
    next:(res=>{
      this.toast.success({detail:"SUCCESS",summary:res.message,duration:5000});

      window.location.reload();
    }),
    error:(err=>{
      this.toast.error({detail:"ERROR",summary:"Something went wrong",duration:5000});
    })
  })

}
}

populatePackage(selectedPackage:Package){
this.productserv.product=selectedPackage;
}
}
