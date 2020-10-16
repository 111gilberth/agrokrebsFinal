import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizantesHComponent } from './fertilizantes-h.component';

describe('FertilizantesHComponent', () => {
  let component: FertilizantesHComponent;
  let fixture: ComponentFixture<FertilizantesHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FertilizantesHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FertilizantesHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
