import { Component, OnInit } from '@angular/core';
import { CompanyManagementServiceService } from 'src/app/services/company-management-service.service';
import { TicketsServiceService } from 'src/app/services/tickets-service.service';
import {HelperService} from 'src/app/services/helper.service'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private companyData:CompanyManagementServiceService , private ticketCount:TicketsServiceService, private paymentCount:HelperService, private companyCount:HelperService) { }

  data:any;
  ticketCountResult:any;
  ticketCountNumber:any;
  paymentCountResult:any;
  companyCountResult:any;
  companyCountNumber:any;
  paymentCountNumber:any;

  ngOnInit(): void {
    this.companyData.getCompoanyManagement().subscribe((result) =>{
        this.data = result
        console.log('data',this.data.companies)
    })

    this.ticketCount.getTicketCount().subscribe((result) =>{
      this.ticketCountResult = result
       this.ticketCountNumber = this.ticketCountResult.data.length

       console.log('ticketCount', this.ticketCountResult.data.length)
    })

    this.paymentCount.getTotalPaymentCount().subscribe((result) => {
      this.paymentCountResult = result
      this.paymentCountNumber = this.paymentCountResult.data.count
      console.log('Payment Count Number', this.paymentCountResult)

    })

    this.companyCount.getCompaniesCount().subscribe((result) => {
      this.companyCountResult = result
       this.companyCountNumber = this.companyCountResult.message[0].companiesCount
      //console.log("Company Count", this.companyCountResult.message[0].companiesCount)
    })
  }


}
