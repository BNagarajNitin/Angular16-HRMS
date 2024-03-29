import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleSwitcherComponent } from './style-switcher.component';

describe('StyleSwitcherComponent', () => {
  let component: StyleSwitcherComponent;
  let fixture: ComponentFixture<StyleSwitcherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StyleSwitcherComponent]
    });
    fixture = TestBed.createComponent(StyleSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
