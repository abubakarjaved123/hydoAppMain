import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcsidebarComponent } from './ccsidebar.component';

describe('CcsidebarComponent', () => {
  let component: CcsidebarComponent;
  let fixture: ComponentFixture<CcsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcsidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
