import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PFlightsComponent } from './p-flights.component';

describe('PFlightsComponent', () => {
  let component: PFlightsComponent;
  let fixture: ComponentFixture<PFlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PFlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
