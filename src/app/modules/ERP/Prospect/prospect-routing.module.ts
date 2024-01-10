import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProposalComponent } from './proposal/proposal.component';



const routes: Routes = [
  { path: 'proposal', component:ProposalComponent },





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProposalRoutingModule { }
