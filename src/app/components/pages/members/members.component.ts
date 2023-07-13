import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private companyData:MemberService) { }

  companyList : any
  ngOnInit(): void {
    
    this.companyData.getCompanyList().subscribe((result)=> {
      this.companyList = result
      this.companyList = this.companyList.data
    })

  }

  
  MemberList = 
    [
      {
        "id": 1,
        "CompanyName": "Apex",
        "AccountType" : "Installation",
        "SubPeriod" : "2 Months",
        "County" : "UAE", 
        "City" : "Dubai",
        "status" : 1, 

      },
      {
        "id": 2,
        "CompanyName": "Ghazali",
        "AccountType" : "Installation",
        "SubPeriod" : "2 Months",
        "County" : "UAE", 
        "City" : "Dubai" ,
        "status" : 0, 
      },
      {
        "id": 3,
        "CompanyName": "General Motors",
        "AccountType" : "Maintenance",
        "SubPeriod" : "2 Months",
        "County" : "UAE", 
        "City" : "Dubai" ,
        "status" : 1, 
        
      }
  
  ]


}
