import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';
//import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { NgChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '@shared';
import { ComponentsModule } from '@shared/components/components.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgChartsModule,
    NgApexchartsModule,
    NgScrollbarModule,
    ComponentsModule,
    SharedModule,
  ],
})
export class DashboardModule {}
