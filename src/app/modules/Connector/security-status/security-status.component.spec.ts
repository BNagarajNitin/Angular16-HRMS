import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityStatusComponent } from './security-status.component';

describe('SecurityStatusComponent', () => {
  let component: SecurityStatusComponent;
  let fixture: ComponentFixture<SecurityStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecurityStatusComponent]
    });
    fixture = TestBed.createComponent(SecurityStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
