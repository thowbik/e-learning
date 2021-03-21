import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelScheduleComponent } from './channel-schedule.component';

describe('ChannelScheduleComponent', () => {
  let component: ChannelScheduleComponent;
  let fixture: ComponentFixture<ChannelScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
