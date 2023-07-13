import { Component, OnInit, Input } from '@angular/core';
import { isComputedPropertyName } from 'typescript';

@Component({
  selector: 'app-sidemenuli',
  templateUrl: './sidemenuli.component.html',
  styleUrls: ['./sidemenuli.component.css']
})
export class SidemenuliComponent implements OnInit {

  @Input() text!: string;
  @Input() className! : string;
  @Input() activeImage! : string;
  @Input() nActiveImage! : string;
  @Input() activeLink! : string;


  constructor() { }

  ngOnInit(): void {
  }

}
