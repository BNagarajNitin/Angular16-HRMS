import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectorRoutingModule } from './connector-routing.module';
import { AlertingComponent } from './alerting/alerting.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { HardwareMetricsComponent } from './hardware-metrics/hardware-metrics.component';
import { HighAvailabilityComponent } from './high-availability/high-availability.component';
import { SecurityStatusComponent } from './security-status/security-status.component';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { SubaccountComponent } from './subaccount/subaccount.component';
//import { CloudToOnPremisesComponent } from './subaccount/cloud-to-on-premises/cloud-to-on-premises.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AlertingComponent,
    ConfigurationComponent,
    HardwareMetricsComponent,
    HighAvailabilityComponent,
    SecurityStatusComponent,
    SubaccountComponent,
    //CloudToOnPremisesComponent,

  ],
  imports: [
    CommonModule,
    ConnectorRoutingModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule
  ]
})
export class ConnectorModule { }
