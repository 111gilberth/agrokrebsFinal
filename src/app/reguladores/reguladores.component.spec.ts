import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReguladoresComponent } from './reguladores.component';

describe('ReguladoresComponent', () => {
  let component: ReguladoresComponent;
  let fixture: ComponentFixture<ReguladoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReguladoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReguladoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
