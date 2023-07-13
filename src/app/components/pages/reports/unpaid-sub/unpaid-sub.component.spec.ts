import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpaidSubComponent } from './unpaid-sub.component';

describe('UnpaidSubComponent', () => {
  let component: UnpaidSubComponent;
  let fixture: ComponentFixture<UnpaidSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnpaidSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnpaidSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
