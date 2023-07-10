import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Package } from 'src/app/model/package.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private baseUrl:string="https://localhost:7135/api/Package/";

  public productDetails!:Package[];
  public product!:Package;


  constructor(private http:HttpClient) { }

  getPackage(){
    return this.http.get<any>(this.baseUrl + 'GetAllPackage');
  }
  savePackage(packageobj:Package){
    return this.http.post<any>(this.baseUrl + 'AddPackage', packageobj);
  }
  updatePackage(packageobj:Package){
    return this.http.put<any>(this.baseUrl + 'UpdatePackage', packageobj);
  }
  getpackageById(id: number){
    return this.http.get<any>(this.baseUrl + 'GetPackage' + id);
  }
  deletePackage(id: number){
    return this.http.delete<any>(this.baseUrl + 'DeletePackage' + id);
  }

}
