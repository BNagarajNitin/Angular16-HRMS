import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import { AllcompanyComponent } from './allcompany/allcompany.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyRoutingModule } from './company-routing.module';
import {MatRadioModule} from '@angular/material/radio';
import {CKEditorModule} from 'ng2-ckeditor';
import {  ReactiveFormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [
    AllcompanyComponent,
    AddCompanyComponent ,
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule ,
    MatButtonModule,
    MatRadioModule,
    CKEditorModule,

   ReactiveFormsModule,
   MatButtonToggleModule,
   MatPaginatorModule,
   MatFormFieldModule

  ]
})
export class CompanyModule { }
