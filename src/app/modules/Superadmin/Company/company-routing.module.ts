import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AllcompanyComponent } from './allcompany/allcompany.component';


const routes: Routes = [
  { path: 'add-company', component: AddCompanyComponent  },
  { path: 'allcompany', component: AllcompanyComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
