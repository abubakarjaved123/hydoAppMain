import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemenuliComponent } from './sidemenuli.component';

describe('SidemenuliComponent', () => {
  let component: SidemenuliComponent;
  let fixture: ComponentFixture<SidemenuliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidemenuliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidemenuliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
