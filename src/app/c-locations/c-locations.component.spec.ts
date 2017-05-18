import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CLocationsComponent } from './c-locations.component';

describe('CLocationsComponent', () => {
  let component: CLocationsComponent;
  let fixture: ComponentFixture<CLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
