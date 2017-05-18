import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBtnsearchComponent } from './c-btnsearch.component';

describe('CBtnsearchComponent', () => {
  let component: CBtnsearchComponent;
  let fixture: ComponentFixture<CBtnsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBtnsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBtnsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
