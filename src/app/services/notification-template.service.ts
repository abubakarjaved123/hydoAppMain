import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class NotificationTemplateService {

  constructor(private http:HttpClient) { }
  
  token:any = localStorage.getItem('token')


  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  // url = 'https://lift-application.herokuapp.com/notificationTemplate/store';

  baseurl = environment.apiURL
  storeNotificationTemplate(data:any):Observable<any>{
    return this.http.post(this.baseurl + '/notificationTemplate/store', data , {headers : this.headers})
  }

  getNotification(){
    return this.http.get(this.baseurl + '/notificationTemplate', {headers : this.headers})
  }

}
