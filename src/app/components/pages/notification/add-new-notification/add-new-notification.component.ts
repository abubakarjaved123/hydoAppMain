import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HelperService } from 'src/app/services/helper.service';
import { SupportServiceService } from 'src/app/services/support-service.service';

@Component({
  selector: 'app-add-new-notification',
  templateUrl: './add-new-notification.component.html',
  styleUrls: ['./add-new-notification.component.css']
})
export class AddNewNotificationComponent implements OnInit {

  constructor(private getCountryID:SupportServiceService, private getCityId:SupportServiceService, private getCompaniesId:HelperService) { }

  CountryResponce: any;
  CityResponce: any;
 companyDetail: any;
 selectedCompany: any;

  ngOnInit(): void {

this.getCompaniesId.getCompaniesList().subscribe((result)=>{
  this.companyDetail = result
  this.companyDetail = this.companyDetail.data

})
  this.getCountryID.getCountry().subscribe((result)=>{
    this.CountryResponce = result
    this.CountryResponce = this.CountryResponce.data
  })

  this.getCityId.getCity().subscribe((result) => {
    this.CityResponce = result
    this.CityResponce = this.CityResponce.data
  })

  }
  
  getValues(data : NgForm){
    console.log(data)
  }


}
