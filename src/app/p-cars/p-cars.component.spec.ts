import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PCarsComponent } from './p-cars.component';

describe('PCarsComponent', () => {
  let component: PCarsComponent;
  let fixture: ComponentFixture<PCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
