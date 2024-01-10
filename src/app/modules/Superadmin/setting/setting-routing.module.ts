
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedComponent } from './shared/shared.component';
import { PricingPackageComponent } from './pricing-package/pricing-package.component';
import { PaymentSettingsComponent } from './payment-settings/payment-settings.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';

const routes: Routes = [
  {
    path: 'general-settings',
    component: GeneralSettingsComponent,
  },
  {
    path: 'payment-settings',
    component: PaymentSettingsComponent,
  },
  {
    path: 'pricing-package',
    component: PricingPackageComponent,
  },
  {
    path: 'shared',
    component: SharedComponent,
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingRoutingModule {}
