import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PPackagesComponent } from './p-packages.component';

describe('PPackagesComponent', () => {
  let component: PPackagesComponent;
  let fixture: ComponentFixture<PPackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PPackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
