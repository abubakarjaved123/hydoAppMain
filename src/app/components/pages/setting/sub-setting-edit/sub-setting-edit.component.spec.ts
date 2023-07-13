import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSettingEditComponent } from './sub-setting-edit.component';

describe('SubSettingEditComponent', () => {
  let component: SubSettingEditComponent;
  let fixture: ComponentFixture<SubSettingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubSettingEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubSettingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
