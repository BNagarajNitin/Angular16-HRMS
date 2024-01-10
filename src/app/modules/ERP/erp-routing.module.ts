import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { AgreementComponent } from './agreement/agreement.component';


const routes: Routes = [

  {
    path: 'Customer',
    loadChildren: () =>
      import('./Customer/customer.module').then(
        (m) =>m.CustomerModule
      )
  },
  {
    path: 'Prospect',
    loadChildren: () =>
      import('./Prospect/prospect.module').then(
        (m) =>m.ProspectModule
      )
  },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErpRoutingModule { }
