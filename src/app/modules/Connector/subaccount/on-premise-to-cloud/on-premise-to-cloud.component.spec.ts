import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPremiseToCloudComponent } from './on-premise-to-cloud.component';

describe('OnPremiseToCloudComponent', () => {
  let component: OnPremiseToCloudComponent;
  let fixture: ComponentFixture<OnPremiseToCloudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnPremiseToCloudComponent]
    });
    fixture = TestBed.createComponent(OnPremiseToCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
