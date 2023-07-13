import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSettingComponent } from './sub-setting.component';

describe('SubSettingComponent', () => {
  let component: SubSettingComponent;
  let fixture: ComponentFixture<SubSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
