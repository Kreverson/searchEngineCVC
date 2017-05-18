import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PHostelsComponent } from './p-hostels.component';

describe('PHostelsComponent', () => {
  let component: PHostelsComponent;
  let fixture: ComponentFixture<PHostelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PHostelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PHostelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
