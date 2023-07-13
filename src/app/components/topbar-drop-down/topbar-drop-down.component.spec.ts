import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarDropDownComponent } from './topbar-drop-down.component';

describe('TopbarDropDownComponent', () => {
  let component: TopbarDropDownComponent;
  let fixture: ComponentFixture<TopbarDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopbarDropDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
