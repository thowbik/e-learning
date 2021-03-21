import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ELearningComponent } from './e-learning.component';

describe('ELearningComponent', () => {
  let component: ELearningComponent;
  let fixture: ComponentFixture<ELearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ELearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
