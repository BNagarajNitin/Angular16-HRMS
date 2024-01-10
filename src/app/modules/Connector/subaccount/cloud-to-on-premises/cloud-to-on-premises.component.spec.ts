import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudToOnPremisesComponent } from './cloud-to-on-premises.component';

describe('CloudToOnPremisesComponent', () => {
  let component: CloudToOnPremisesComponent;
  let fixture: ComponentFixture<CloudToOnPremisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloudToOnPremisesComponent]
    });
    fixture = TestBed.createComponent(CloudToOnPremisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
