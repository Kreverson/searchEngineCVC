import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PExchangesComponent } from './p-exchanges.component';

describe('PExchangesComponent', () => {
  let component: PExchangesComponent;
  let fixture: ComponentFixture<PExchangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PExchangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PExchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
