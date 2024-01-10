import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityStatusComponent } from './security-status/security-status.component';
import { HighAvailabilityComponent } from './high-availability/high-availability.component';
import { AlertingComponent } from './alerting/alerting.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { HardwareMetricsComponent } from './hardware-metrics/hardware-metrics.component';
//import { SubaccountComponent } from './subaccount/subaccount.component';


const routes: Routes = [
  { path: 'security-status', component: SecurityStatusComponent },
  { path: 'high-availability', component: HighAvailabilityComponent},
  { path: 'hardware-metrics', component: HardwareMetricsComponent},
  { path: 'configuration', component: ConfigurationComponent},
  { path: 'alerting', component: AlertingComponent},
  //{ path: 'subaccount', component: SubaccountComponent},
   {
    path: 'subaccount',
    loadChildren: () =>
      import('./subaccount/subaccount.module').then(
        (m) =>m.SubaccountModule
      )
  },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectorRoutingModule { }
