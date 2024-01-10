import { Component } from '@angular/core';
import { FontService } from 'app/font.service';

@Component({
  selector: 'app-payment-settings',
  templateUrl: './payment-settings.component.html',
  styleUrls: ['./payment-settings.component.scss']
})
export class PaymentSettingsComponent {
  constructor(public fontService: FontService) {}
}
