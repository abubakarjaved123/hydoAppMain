import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  @Input() callbackFunction='clickEvent()';


  constructor(private translateService: TranslateService) {}

  public selectLanguage(event: any){
    this.translateService.use(event.target.value);
  }

  ngOnInit(): void {
  }
  status: boolean = false;

clickEvent(){
      this.status = !this.status;
}

}
