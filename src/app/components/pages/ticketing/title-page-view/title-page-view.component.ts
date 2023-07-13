import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-title-page-view',
  templateUrl: './title-page-view.component.html',
  styleUrls: ['./title-page-view.component.css']
})
export class TitlePageViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getValues(data : NgForm){
    console.log(data)
  }
}
