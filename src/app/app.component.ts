import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public getScreenWidth: any;
  title: string= 'app-dashboard';

  constructor(private translateService: TranslateService) {}
  status = false;

  ngOnInit() {
    this.getScreenWidth = window.innerWidth
    if(this.getScreenWidth < 650){
      this.status = true
    }
    else{
      this.status = false
    }
    return this.getScreenWidth
    
}


  public selectLanguage(event: any){
    this.translateService.use(event.target.value);
  }
  
  clickEvent(){
        this.status = !this.status;
  }
}
