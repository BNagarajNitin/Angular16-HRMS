import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSubaccountComponent } from './all-subaccount.component';

describe('AllSubaccountComponent', () => {
  let component: AllSubaccountComponent;
  let fixture: ComponentFixture<AllSubaccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllSubaccountComponent]
    });
    fixture = TestBed.createComponent(AllSubaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
