import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CChkcarlocaldeliveryComponent } from './c-chkcarlocaldelivery.component';

describe('CChkcarlocaldeliveryComponent', () => {
  let component: CChkcarlocaldeliveryComponent;
  let fixture: ComponentFixture<CChkcarlocaldeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CChkcarlocaldeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CChkcarlocaldeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
