import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizantesLComponent } from './fertilizantes-l.component';

describe('FertilizantesLComponent', () => {
  let component: FertilizantesLComponent;
  let fixture: ComponentFixture<FertilizantesLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FertilizantesLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FertilizantesLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
