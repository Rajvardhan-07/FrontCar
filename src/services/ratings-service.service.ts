import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rating } from 'src/app/model/rating.model';

@Injectable({
  providedIn: 'root'
})
export class RatingsServiceService {

  constructor(private http:HttpClient) { }

  addrating(obj:Rating){
    return this.http.post<Rating>("https://localhost:7135/api/Rating/AddRating",obj)
  }
  getRatingById(id:number){

    return this.http.get<Rating>("https://localhost:7135/api/Rating/GetAverageRating/"+id)
}
}
