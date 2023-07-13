import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class TicketsServiceService {

  token:any = localStorage.getItem('token')
  
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);


  url = environment.apiURL
  constructor(private http:HttpClient) { }

  getTicket(){
    return this.http.get(this.url)
  }

  getTicketCount(){
    return this.http.get(this.url + "/ticket/getTicketList", {headers : this.headers})
  }

  getTicketAdmin(data:any):Observable<any>{
    return this.http.get(this.url +'/ticket/getTicketList',data )
  } 

}
