import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionbillnotiComponent } from './subscriptionbillnoti.component';

describe('SubscriptionbillnotiComponent', () => {
  let component: SubscriptionbillnotiComponent;
  let fixture: ComponentFixture<SubscriptionbillnotiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionbillnotiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionbillnotiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
