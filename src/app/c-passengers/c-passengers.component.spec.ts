import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CPassengersComponent } from './c-passengers.component';

describe('CPassengersComponent', () => {
  let component: CPassengersComponent;
  let fixture: ComponentFixture<CPassengersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPassengersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CPassengersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
