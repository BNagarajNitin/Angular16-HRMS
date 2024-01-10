import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CloudToOnPremisesComponent } from './cloud-to-on-premises/cloud-to-on-premises.component';
import { AuditsComponent } from './audits/audits.component';
import { Monitor1Component } from './monitor1/monitor1.component';
import { Monitor2Component } from './monitor2/monitor2.component';
import { LogTracesComponent } from './log-traces/log-traces.component';
import { OnPremiseToCloudComponent } from './on-premise-to-cloud/on-premise-to-cloud.component';
//import { AddsubaccountComponent } from './all-subaccount/addsubaccount.component';
import { AllSubaccountComponent } from './all-subaccount/all-subaccount.component';



const routes: Routes = [
  { path: 'cloud-to-on-premises', component: CloudToOnPremisesComponent  },
  { path: 'audits', component: AuditsComponent  },
  { path: 'monitor1', component: Monitor1Component },
  { path: 'monitor2', component: Monitor2Component },
  { path: 'log-traces', component: LogTracesComponent },
  { path: 'on-premise-to-cloud', component: OnPremiseToCloudComponent },
  { path: 'all-subaccount', component: AllSubaccountComponent },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubaccountRoutingModule { }
