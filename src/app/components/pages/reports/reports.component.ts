import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  
  clientReport = 
  {
    "reports":
    [
      {
        "id": 1,
       "name" : "Arsalan",
       "email" : "arsalan@gmail.com",
       "contact" : "0123-1234567",
       "username" : "arsalan",
       "password" : "123@Pass",
       "role" : "Maintenance",
       "status" : 0
      },
      {
        "id": 2,
       "name" : "Tariq",
       "email" : "tariq@gmail.com",
       "contact" : "0321-3254144",
       "username" : "tariq",
       "password" : "453@Pass",
       "role" : "Installation",
       "status" : 1
      },
      {
        "id": 3,
       "name" : "Zahoor",
       "email" : "zahoor@gmail.com",
       "contact" : "0444-9876543",
       "username" : "zahoor",
       "password" : "abc#333",
       "role" : "Maintenance",
       "status" : 1
      },
      
    ]
  }
}
