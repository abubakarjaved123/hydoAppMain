import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardTransferComponent } from './credit-card-transfer.component';

describe('CreditCardTransferComponent', () => {
  let component: CreditCardTransferComponent;
  let fixture: ComponentFixture<CreditCardTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
