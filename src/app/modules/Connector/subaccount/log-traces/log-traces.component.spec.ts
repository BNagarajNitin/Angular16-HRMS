import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogTracesComponent } from './log-traces.component';

describe('LogTracesComponent', () => {
  let component: LogTracesComponent;
  let fixture: ComponentFixture<LogTracesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogTracesComponent]
    });
    fixture = TestBed.createComponent(LogTracesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
