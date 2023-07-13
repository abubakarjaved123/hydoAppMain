import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationTemplateService } from 'src/app/services/notification-template.service';


@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <p class="modal-title">Notification</p>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body text-center">
        <div class="form-group col-lg-12 col-md-12 col-sm-12 text-left">
              <label for="type">Type</label>
              <select class="form-control">
                <option>Type 1</option>
                <option>Type 2</option>
                <option>Type 3</option>
              </select>  
            </div>
    
    <div class="form-group col-lg-12 col-md-12 col-sm-12 text-left">
                <label for="Subscriptionexpiringdate">Subscription expiring date</label>
                <textarea class="form-control" name="" id="" cols="30" rows="5"></textarea>
            </div>

            <div class="col-lg-12">
            <button class="save-btn">
            <i class="fas fa-save"></i>  <span class="text">Save</span>
        </button>
        
        <button class="cancel-btn"  aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <i class="fas fa-times"></i>  <span class="text">Cancel</span>
    </button>
            </div>
    </div>
  `
})

export class NgbdModalContent {
  // @Input() name! : string ;

  constructor(public activeModal: NgbActiveModal) {}
}


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private modalService: NgbModal, private notificationList:NotificationTemplateService) { }

notification:any;

  

  ngOnInit(): void {
    this.notificationList.getNotification().subscribe((result)=>{
      this.notification = result
      this.notification = this.notification.data
    
    })
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }



  // notification = {
  //   "sendNoti":
  //   [
  //     {
  //     "id": 1,
  //     "clientName" : 'Zahoor',
  //     "subType" : 'Maintenance',
  //     "country" : 'UAE',
  //     "city" : 'Abu Dhabi',
	//   "period" : '3 Years',
	//   "eyear" : '2024',
	//   "emonth" : 'December',
	//   "edate" : '12',
  //     },
	//  {
  //     "id": 2,
  //     "clientName" : 'Nadeem',
  //     "subType" : 'Maintenance',
  //     "country" : 'UAE',
  //     "city" : 'Sharjah',
	//   "period" : '4 Years',
	//   "eyear" : '2026',
	//   "emonth" : 'August',
	//   "edate" : '21',
  //     },
	//    {
  //     "id": 3,
  //     "clientName" : 'Aslam',
  //     "subType" : 'Installation',
  //     "country" : 'UAE',
  //     "city" : 'Dubai',
	//   "period" : '5 Years',
	//   "eyear" : '2027',
	//   "emonth" : 'December',
	//   "edate" : '19',
  //     },
  //   ]
  // }
}
