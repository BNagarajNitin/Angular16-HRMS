import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { PaymentSettingsComponent } from './payment-settings/payment-settings.component';
import { PricingPackageComponent } from './pricing-package/pricing-package.component';
import { SettingRoutingModule } from './setting-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {CKEditorModule} from 'ng2-ckeditor';
import {  ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
// import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [GeneralSettingsComponent, PaymentSettingsComponent, PricingPackageComponent,],
    imports: [
        CommonModule,
        SettingRoutingModule,
        MatTabsModule,
        MatButtonModule,
        ReactiveFormsModule,
        CKEditorModule,
        SharedModule
    ]
})
export class SettingModule { }
