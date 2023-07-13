import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-wallet',
  templateUrl: './client-wallet.component.html',
  styleUrls: ['./client-wallet.component.css']
})
export class ClientWalletComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  CCList = 
  [
    {
      "id": 1,
      "CardNumber": "1234-4567-8974",
      "Payment" : "5214 Riyals",
    },
    {
      "id": 2,
      "CardNumber": "4567-8974-1234",
      "Payment" : "9657 Riyals",
    },
    {
      "id": 3,
      "CardNumber": "8974-1234-4567",
      "Payment" : "1754 Riyals",
    },
  ]

  CCCList = 
  [
    {
      "id": 1,
      "CardNumber": "1234-4567-8974",
      "Payment" : "5214 Riyals",
      "Status" : 0
    },
    {
      "id": 2,
      "CardNumber": "4567-8974-1234",
      "Payment" : "9657 Riyals",
      "Status" : 1
    },
    {
      "id": 3,
      "CardNumber": "8974-1234-4567",
      "Payment" : "1754 Riyals",
      "Status" : 0
    },
  ]
}
