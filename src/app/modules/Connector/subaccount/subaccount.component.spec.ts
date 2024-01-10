import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubaccountComponent } from './subaccount.component';

describe('SubaccountComponent', () => {
  let component: SubaccountComponent;
  let fixture: ComponentFixture<SubaccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubaccountComponent]
    });
    fixture = TestBed.createComponent(SubaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
