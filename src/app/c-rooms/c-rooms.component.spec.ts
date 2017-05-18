import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRoomsComponent } from './c-rooms.component';

describe('CRoomsComponent', () => {
  let component: CRoomsComponent;
  let fixture: ComponentFixture<CRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
