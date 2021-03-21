import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentvoiceComponent } from './studentvoice.component';

describe('StudentvoiceComponent', () => {
  let component: StudentvoiceComponent;
  let fixture: ComponentFixture<StudentvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
