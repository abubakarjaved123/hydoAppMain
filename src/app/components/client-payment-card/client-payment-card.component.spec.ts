import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPaymentCardComponent } from './client-payment-card.component';

describe('ClientPaymentCardComponent', () => {
  let component: ClientPaymentCardComponent;
  let fixture: ComponentFixture<ClientPaymentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientPaymentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPaymentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
