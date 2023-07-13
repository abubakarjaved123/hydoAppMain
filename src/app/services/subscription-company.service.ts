import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError  } from 'rxjs';
import { throwError } from 'rxjs';
import { environment } from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionCompanyService {

  // baseurl = "https://lift-application.herokuapp.com/"
  baseurl = environment.apiURL
  token:any = localStorage.getItem('token')
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  constructor(private http:HttpClient) { }

  addNewCompanySub(data:any):Observable<any>{
    return this.http.post(this.baseurl +'/company/store', data , {headers : this.headers})    .pipe(
      catchError((err) => {
        console.log('error caught in service')
        //console.table(err.error.errors);
        alert(err.error.errors);

        //Handle the error here

        return throwError(err);    //Rethrow it back to component
      })
    )
  }
}
