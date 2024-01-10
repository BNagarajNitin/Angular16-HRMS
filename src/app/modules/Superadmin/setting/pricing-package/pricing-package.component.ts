import { Component } from '@angular/core';
import { FontService } from 'app/font.service';

@Component({
  selector: 'app-pricing-package',
  templateUrl: './pricing-package.component.html',
  styleUrls: ['./pricing-package.component.scss']
})
export class PricingPackageComponent {
  constructor(public fontService: FontService) {}
}
