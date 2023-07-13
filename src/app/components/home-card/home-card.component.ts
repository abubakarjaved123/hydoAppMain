import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent implements OnInit {

  @Input() text!: string;
  @Input() count!: string;
  @Input() image!: string;
  @Input() link!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
