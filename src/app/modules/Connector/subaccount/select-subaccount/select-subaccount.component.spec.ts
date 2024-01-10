import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSubaccountComponent } from './select-subaccount.component';

describe('SelectSubaccountComponent', () => {
  let component: SelectSubaccountComponent;
  let fixture: ComponentFixture<SelectSubaccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectSubaccountComponent]
    });
    fixture = TestBed.createComponent(SelectSubaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
