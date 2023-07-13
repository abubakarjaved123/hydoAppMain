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
export class UserManagementServiceService {

  baseurl = environment.apiURL

  token:any = localStorage.getItem('token')
  
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);


  constructor(private http:HttpClient) { }
  getUserManagement(){
    return this.http.get(this.baseurl + '/users', {headers : this.headers})
  }
  
  addNewUser(data:any):Observable<any>{
    return this.http.post(this.baseurl +'/users/create', data , {headers : this.headers}).pipe(

      
      catchError((err) => {
        console.log('error caught in service')
        //console.table(err.error.errors);
        alert(err.error.errors);

        //Handle the error here

        return throwError(err);    //Rethrow it back to component
      })
    )
  }

  updateUser(data:any):Observable<any>{
    return this.http.post(this.baseurl+'',data,{headers: this.headers}).pipe(
      catchError((err) => {
        alert(err.error.errors);
        return throwError(err);
      })
    )
  }

  getUserById(userid: any) {
    return this.http.get(this.baseurl + '/users/' + userid, {headers: this.headers})
  }
}
