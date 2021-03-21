import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeetupalliComponent } from './veetupalli.component';

describe('VeetupalliComponent', () => {
  let component: VeetupalliComponent;
  let fixture: ComponentFixture<VeetupalliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeetupalliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeetupalliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
