import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unpaid-sub',
  templateUrl: './unpaid-sub.component.html',
  styleUrls: ['./unpaid-sub.component.css']
})
export class UnpaidSubComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  unpaidSub = {
    "sub":
    [
      {
      "id": 1,
      "companyName" : 'Adidas',
      "accountType" : '3551 Riyals',
      "subPeriod" : 'B#74839',
      "country" : "UAE",
      "city" : "Dubai",
      "status" : 1 
      },
      {
        "id": 2,
        "companyName" : 'Audi Motors',
        "accountType" : '24115 Riyals',
        "subPeriod" : 'B#32439',
        "country" : "Sudia Arabia",
        "city" : "Riyadh",
        "status" : 0 
        },
        {
          "id": 3,
          "companyName" : 'Oriant',
          "accountType" : '6584 Riyals',
          "subPeriod" : 'B#21439',
          "country" : "Pakistan",
          "city" : "Karachi",
          "status" : 1 
          },
          {
            "id": 4,
            "companyName" : 'Google',
            "accountType" : '6551 Riyals',
            "subPeriod" : 'B#74579',
            "country" : "USA",
            "city" : "New York",
            "status" : 1 
            },
    ]
  }
}
