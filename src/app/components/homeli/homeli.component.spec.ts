import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeliComponent } from './homeli.component';

describe('HomeliComponent', () => {
  let component: HomeliComponent;
  let fixture: ComponentFixture<HomeliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
