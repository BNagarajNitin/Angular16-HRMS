import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighAvailabilityComponent } from './high-availability.component';

describe('HighAvailabilityComponent', () => {
  let component: HighAvailabilityComponent;
  let fixture: ComponentFixture<HighAvailabilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighAvailabilityComponent]
    });
    fixture = TestBed.createComponent(HighAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
