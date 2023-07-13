import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/env';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyManagementServiceService {
   token:any = localStorage.getItem('token')
  // token:any = token
  
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  constructor(private http:HttpClient) { }
  url = `${environment.apiURL}/company`

  getCompoanyManagement(){
    return this.http.get(this.url,{ 'headers': this.headers })
  }
  getCompanyListing(){
    
  }
}
