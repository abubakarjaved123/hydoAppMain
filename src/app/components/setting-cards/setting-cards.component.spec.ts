import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingCardsComponent } from './setting-cards.component';

describe('SettingCardsComponent', () => {
  let component: SettingCardsComponent;
  let fixture: ComponentFixture<SettingCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
