import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-payment',
  templateUrl: './client-payment.component.html',
  styleUrls: ['./client-payment.component.css']
})
export class ClientPaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  PaymentList = 
  [
    {
      "id": 1,
      "ClientName": "Naseer",
      "ClientIncome" : "7400 Riyals",
      "ClientCC" : "2890 Riays"
    },
    {
      "id": 1,
      "ClientName": "Azhar",
      "ClientIncome" : "5800 Riyals",
      "ClientCC" : "1280 Riays"
    },
    {
      "id": 3,
      "ClientName": "Aslam",
      "ClientIncome" : "5400 Riyals",
      "ClientCC" : "3210 Riays"
    },
  
  ]
}
