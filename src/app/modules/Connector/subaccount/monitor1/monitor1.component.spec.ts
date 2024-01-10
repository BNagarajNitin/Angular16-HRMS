import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Monitor1Component } from './monitor1.component';

describe('Monitor1Component', () => {
  let component: Monitor1Component;
  let fixture: ComponentFixture<Monitor1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Monitor1Component]
    });
    fixture = TestBed.createComponent(Monitor1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
