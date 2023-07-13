import { Component, OnInit } from '@angular/core';
import { CompanySubscriptionServiceService } from 'src/app/services/company-subscription-service.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  constructor(private getSub:CompanySubscriptionServiceService) { }


  BillList:any;

  ngOnInit(): void {
    this.getSub.getSub().subscribe((result)=>{
        this.BillList=result
        this.BillList = this.BillList.data
       // console.log(this.BillList)
    })
  }

  counter(i: any) {
    return new Array(i);
}

getKeys(obj: any){
  return Object.keys(obj)
}
  // BillList = 
  // [
  //   {
  //     "id": 1,
  //     "CompanyName": "Apex",
  //     "ExpiryDate" : "01-03-2022",
  //     "SubType" : "Maintenance",
  //     "SubPrice" : "2400 Riyals", 
  //     "RenewelDate" : "06-04-2022", 
  //   },
  //   {
  //     "id": 2,
  //     "CompanyName": "Tesla",
  //     "ExpiryDate" : "05-06-2022",
  //     "SubType" : "Installation",
  //     "SubPrice" : "2900 Riyals", 
  //     "RenewelDate" : "10-12-2022", 
  //   },
  //   {
  //     "id": 3,
  //     "CompanyName": "Tata",
  //     "ExpiryDate" : "01-01-2023",
  //     "SubType" : "Maintenance",
  //     "SubPrice" : "4400 Riyals", 
  //     "RenewelDate" : "14-03-2023", 
  //   }
  // ]
}
