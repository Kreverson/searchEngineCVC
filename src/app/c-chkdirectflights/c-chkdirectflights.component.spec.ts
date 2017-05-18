import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CChkdirectflightsComponent } from './c-chkdirectflights.component';

describe('CChkdirectflightsComponent', () => {
  let component: CChkdirectflightsComponent;
  let fixture: ComponentFixture<CChkdirectflightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CChkdirectflightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CChkdirectflightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
