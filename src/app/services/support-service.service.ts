import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class SupportServiceService {

  constructor(private http:HttpClient) { }

  countryURL = `${environment.apiURL}/support/countries`
  cityURL = `${environment.apiURL}/support/cities/636a871e21ec9f5b0db04d61`

  getCountry(){
      return this.http.get(this.countryURL)
  }

  getCity(){
    return this.http.get(this.cityURL)
  }
}
