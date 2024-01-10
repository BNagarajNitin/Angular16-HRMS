import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareMetricsComponent } from './hardware-metrics.component';

describe('HardwareMetricsComponent', () => {
  let component: HardwareMetricsComponent;
  let fixture: ComponentFixture<HardwareMetricsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HardwareMetricsComponent]
    });
    fixture = TestBed.createComponent(HardwareMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
