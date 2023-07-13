import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.css']
})
export class ReportCardComponent implements OnInit {

  @Input() alink! : string;
  @Input() aclass! : string;
  @Input() innertext! : string;
  @Input() innerfigure! : string;

  constructor() { }

  ngOnInit(): void {
  }

}
