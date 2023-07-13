import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/env';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http:HttpClient) { }
  token:any = localStorage.getItem('token')
  
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  url = `${environment.apiURL}/company`;

  getCompanyList(){
    return this.http.get(this.url, {headers : this.headers})
  }
}
