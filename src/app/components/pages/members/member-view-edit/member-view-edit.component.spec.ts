import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberViewEditComponent } from './member-view-edit.component';

describe('MemberViewEditComponent', () => {
  let component: MemberViewEditComponent;
  let fixture: ComponentFixture<MemberViewEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberViewEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberViewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
