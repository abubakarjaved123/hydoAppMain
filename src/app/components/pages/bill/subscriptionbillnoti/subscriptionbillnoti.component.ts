import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <p class="modal-title">Notification Reminder</p>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body text-center">
      <img src="../../../../../assets/images/success.svg" />
      <p class="mt-5">Expiry Reminder send to client Successfully</p>
    </div>
  `
})
export class NgbdModalContent {
  // @Input() name! : string ;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-subscriptionbillnoti',
  templateUrl: './subscriptionbillnoti.component.html',
  styleUrls: ['./subscriptionbillnoti.component.css']
})
export class SubscriptionbillnotiComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  getValues(data : NgForm){
    console.log(data)
  }
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
}
