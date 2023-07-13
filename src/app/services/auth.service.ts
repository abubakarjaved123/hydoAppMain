import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/env';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  url = `${environment.apiURL}/login`; 


  login(data:any):Observable<any>{
    return this.http.post(`${this.url}`,data) .pipe(
      catchError((err) => {
      //  console.log('Error Response',err.error.errors)
        //console.table(err.error.errors);
        if(err.error.message){
          // alert(err.error.message);
        }
        else{
          alert(err.error.errors)
        }
       

        //Handle the error here

        return throwError(err);    //Rethrow it back to component
      })
    )
    
   }
   
   isLoggedIn(): boolean {
     var x = localStorage.getItem("token");
    
     if(x != null){
       return true
     }
       else{
        //  return false;
       return true
       }
   }
}
