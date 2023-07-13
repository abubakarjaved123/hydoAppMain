import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paid-bill',
  templateUrl: './paid-bill.component.html',
  styleUrls: ['./paid-bill.component.css']
})
export class PaidBillComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bill = {
    "paidBill":
    [
      {
      "id": 1,
      "companyName" : 'Adidas',
      "billAmount" : '3551 Riyals',
      "billNumber" : 'B#74839',
      "status" : 1 
      },
     {
      "id": 2,
      "companyName" : 'PSO',
      "billAmount" : '2411 Riyals',
      "billNumber" : 'B#1425',
      "status" : 0 
      },
  {
      "id": 3,
      "companyName" : 'Apex',
      "billAmount" : '8471 Riyals',
      "billNumber" : 'B#8544',
      "status" : 1 
      },	
    ]
  }
}
