import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card-transfer',
  templateUrl: './credit-card-transfer.component.html',
  styleUrls: ['./credit-card-transfer.component.css']
})
export class CreditCardTransferComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  creditCard = {
    "cc":
    [
      {
      "id": 1,
      "cardNumber" : '1234-2547-2541',
      "payment" : '2411 Riyals',
      "status" : 1 
      },
      {
        "id": 2,
        "cardNumber" : '3251-4721-2541',
        "payment" : '4500 Riyals',
        "status" : 1 
        },
       {
      "id": 3,
      "cardNumber" : '8544-3522-4141',
      "payment" : '5844 Riyals',
      "status" : 0 
      },
       {
      "id": 4,
      "cardNumber" : '2404-5477-2154',
      "payment" : '6523 Riyals',
      "status" : 1 
      },
     
    ]
  }
}
