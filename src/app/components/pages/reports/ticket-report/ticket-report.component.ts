import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-report',
  templateUrl: './ticket-report.component.html',
  styleUrls: ['./ticket-report.component.css']
})
export class TicketReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  TicketList = 
  {
    "tickets":
    [
      {
        "id": 1,
        "CompanyName": "Apex",
        "TicketTitle" : "Button Issue",
        "TicketDate" : "06-04-2021",
        "Priority" : "Normal", 
      },
      {
        "id": 2,
        "CompanyName": "General Motors",
        "TicketTitle" : "Rails Issues",
        "TicketDate" : "06-04-2021",
        "Priority" : "High", 
      },
      {
        "id": 3,
        "CompanyName": "Tata",
        "TicketTitle" : "Light Not Working",
        "TicketDate" : "06-04-2021",
        "Priority" : "Low", 
      },
      {
        "id": 4,
        "CompanyName": "Apple",
        "TicketTitle" : "Door Issue",
        "TicketDate" : "06-04-2021",
        "Priority" : "High", 
      },
  ]
  }
}
