import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbar-drop-down',
  templateUrl: './topbar-drop-down.component.html',
  styleUrls: ['./topbar-drop-down.component.css']
})
export class TopbarDropDownComponent implements OnInit {

  @Output() btnClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {


    //console.log('userName', userName)

  }
  
 userName = window.localStorage.getItem('userName');
  
  onClick() {
    console.log('Dropdown')
  }

 

}
