import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDashboardCardComponent } from './client-dashboard-card.component';

describe('ClientDashboardCardComponent', () => {
  let component: ClientDashboardCardComponent;
  let fixture: ComponentFixture<ClientDashboardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientDashboardCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDashboardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
