import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client-dashboard-card',
  templateUrl: './client-dashboard-card.component.html',
  styleUrls: ['./client-dashboard-card.component.css']
})
export class ClientDashboardCardComponent implements OnInit {

	@Input() text!: string;
	@Input() figure! : string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
