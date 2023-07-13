import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePageViewComponent } from './title-page-view.component';

describe('TitlePageViewComponent', () => {
  let component: TitlePageViewComponent;
  let fixture: ComponentFixture<TitlePageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlePageViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlePageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
