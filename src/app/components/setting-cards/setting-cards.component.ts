import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-setting-cards',
  templateUrl: './setting-cards.component.html',
  styleUrls: ['./setting-cards.component.css']
})
export class SettingCardsComponent implements OnInit {

  
  @Input() alink! : string;
  @Input() aclass! : string;
  @Input() innertext! : string;
  @Input() innerfigure! : string;

  constructor() { }

  ngOnInit(): void {
  }

}
