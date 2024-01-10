import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubaccountRoutingModule } from './subaccount-routing.module';
import { CloudToOnPremisesComponent } from './cloud-to-on-premises/cloud-to-on-premises.component';
import { OnPremiseToCloudComponent } from './on-premise-to-cloud/on-premise-to-cloud.component';
import { Monitor1Component } from './monitor1/monitor1.component';
import { Monitor2Component } from './monitor2/monitor2.component';
import { AuditsComponent } from './audits/audits.component';
import { LogTracesComponent } from './log-traces/log-traces.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { AddsubaccountComponent } from './addsubaccount/addsubaccount.component';
import { AllSubaccountComponent } from './all-subaccount/all-subaccount.component';
//import { MatDialogModule } from '@angular/material/dialog';
//import { AddsubaccountComponent } from './all-subaccount/addsubaccount.component';
import {MatButtonModule} from '@angular/material/button';
import { SelectSubaccountComponent } from './select-subaccount/select-subaccount.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CloudToOnPremisesComponent,
    OnPremiseToCloudComponent,
    Monitor1Component,
    Monitor2Component,
    AuditsComponent,
    LogTracesComponent,
    AddsubaccountComponent,
    AllSubaccountComponent,
    SelectSubaccountComponent,

  ],
  imports: [
    CommonModule,
    SubaccountRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule
  ]
})
export class SubaccountModule { }
