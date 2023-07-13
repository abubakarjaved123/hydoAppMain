import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private http:HttpClient) { }

  baseurl = environment.apiURL

    token:any = localStorage.getItem('token')


    headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    

  getRoles(){
    return this.http.get(this.baseurl + '/role',{headers : this.headers})
  }


  getTotalPaymentCount(){
    return this.http.get(this.baseurl + '/companySubscription/unpaid-total',{headers : this.headers})
  }

  getUnpaidSubCount(){
    return this.http.get(this.baseurl + '')
  }

  getCCTransferCount(){
    return this.http.get(this.baseurl + '')
  }

  getNotificationCount(){
    return this.http.get(this.baseurl + '')
  }

  getCompaniesCount(){
    return this.http.get(this.baseurl + '/company/total-count',{headers : this.headers})
  }

  getNotificationType(){
    return this.http.get(this.baseurl + '/notificationType',{headers : this.headers})
  }

  getCompaniesList(){
    return this.http.get(this.baseurl + '/company',{headers : this.headers})
  }
}
