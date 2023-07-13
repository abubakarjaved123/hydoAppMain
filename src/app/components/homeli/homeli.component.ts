import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-homeli',
  templateUrl: './homeli.component.html',
  styleUrls: ['./homeli.component.css']
})
export class HomeliComponent implements OnInit {

  @Input() text!: string;
  @Input() className! : string;
  @Input() activeImage! : string;
  @Input() nActiveImage! : string;
  @Input() activeLink! : string;
  
  constructor() { }
  

  ngOnInit(): void {
  }

}
