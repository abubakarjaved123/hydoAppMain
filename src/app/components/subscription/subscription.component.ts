import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { SubscriptionCompanyService } from 'src/app/services/subscription-company.service';
import { SupportServiceService } from 'src/app/services/support-service.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  constructor(private addNewCompany:SubscriptionCompanyService, private getCountryID:SupportServiceService, private getCityId:SupportServiceService) { }


  formGroup! : FormGroup;
  CountryResponce: any;
  CityResponce: any;
 

  ngOnInit(): void {
   this. initUserForm();

  this.getCountryID.getCountry().subscribe((result)=>{
    this.CountryResponce = result
    this.CountryResponce = this.CountryResponce.data
  })

  this.getCityId.getCity().subscribe((result) => {
    this.CityResponce = result
    this.CityResponce = this.CityResponce.data
  })

  }



  initUserForm(){

    this.formGroup = new FormGroup({
      

    companyName: new FormControl('', [Validators.required]),
    companyRepName: new FormControl('', [Validators.required]),
    companyEmail: new FormControl('', [Validators.required]),
     //companyContact: new FormArray([ new FormControl('', [Validators.required])]),
    //companyContact: new FormControl(['']),
  companyContact: new FormArray([
    // new FormControl()
  ]),
    companyCountryId: new FormControl('', [Validators.required]),
    companyCityId: new FormControl('', [Validators.required]),
    companyType: new FormControl('', [Validators.required]),
    companyAccountType: new FormControl('', [Validators.required]),
    companyNoClient: new FormControl('', [Validators.required]),
    companyNoMaintenanceManager: new FormControl('', [Validators.required]),
    companyNoMaintenanceTechnician: new FormControl('', [Validators.required]),
    companyNoMaintenanceRepairTechnician: new FormControl('', [Validators.required]),
    companyNoInstallationManager: new FormControl('', [Validators.required]),
    companyNoInstallationTechnician: new FormControl('', [Validators.required]),
    companyNoDashboardUsers: new FormControl('', [Validators.required]),
    companyNoCitiesAllowed: new FormControl('', [Validators.required]),
    companyTrailDays: new FormControl('', [Validators.required]),
    companyTrailStartDate: new FormControl('', [Validators.required]),
    companyTrailEndDate: new FormControl('', [Validators.required]),
    companyNoSubscriptionYears: new FormControl('', [Validators.required]),
    companyNoSubscriptionStartDate: new FormControl('', [Validators.required]),
    companyNoSubscriptionEndDate: new FormControl('', [Validators.required]),
    companySubscriptionFee: new FormControl('', [Validators.required]),
    companyBankName: new FormControl('', [Validators.required]),
    companyBankIBAN: new FormControl('', [Validators.required]),
    companyBankCity: new FormControl('', [Validators.required]),
    
    })   
  }


  
  changeWebsite(e: any) {

    var targetValue:any = e.target.value
    console.log("['" + e.target.value + "']");
    //  this.formGroup.value.companyContact.setPatch();
    
    
    (<FormArray>this.formGroup.get('companyContact')).push(new FormControl(targetValue))
  }

  addCompany(){
    
     //console.log(this.formGroup.value.companyContact)

        if(this.formGroup.valid){
          this.addNewCompany.addNewCompanySub(this.formGroup.value).subscribe(result => {
            if(result.status === true){
              window.location.href='/members'
            }
            else{
              alert ('Some Error')
            }
          } )
        }
        else{
         alert("form not validated")
         console.log(this.formGroup)
        }
      }
}
