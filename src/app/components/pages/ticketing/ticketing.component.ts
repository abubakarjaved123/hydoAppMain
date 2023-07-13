import { Component, OnInit } from '@angular/core';
import { TicketsServiceService } from 'src/app/services/tickets-service.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-ticketing',
  templateUrl: './ticketing.component.html',
  styleUrls: ['./ticketing.component.css']
})
export class TicketingComponent implements OnInit {

  constructor(private getTicketAdmin:TicketsServiceService) { }

  token:any = localStorage.getItem('token')

  TicketList:any;


  ngOnInit(): void {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    
    this.getTicketAdmin.getTicketAdmin({headers : headers}).subscribe((data)=>{
      this.TicketList = data
      this.TicketList = this.TicketList.data
      console.warn(data)
    })
  }

//   TicketList = 
//   [
//     {
//       "id": 1,
//       "CompanyName": "Apex",
//       "TicketTitle" : "Button Issue",
//       "TicketDate" : "06-04-2021",
//       "Priority" : "Normal", 
//     },
//     {
//       "id": 2,
//       "CompanyName": "General Motors",
//       "TicketTitle" : "Rails Issues",
//       "TicketDate" : "06-04-2021",
//       "Priority" : "High", 
//     },
//     {
//       "id": 3,
//       "CompanyName": "Tata",
//       "TicketTitle" : "Light Not Working",
//       "TicketDate" : "06-04-2021",
//       "Priority" : "Low", 
//     },
//     {
//       "id": 4,
//       "CompanyName": "Apple",
//       "TicketTitle" : "Door Issue",
//       "TicketDate" : "06-04-2021",
//       "Priority" : "High", 
//     },
// ]
}
