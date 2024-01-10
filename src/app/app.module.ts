import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { PageLoaderComponent } from './layout/page-loader/page-loader.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { RightSidebarComponent } from './layout/right-sidebar/right-sidebar.component';
import { AuthLayoutComponent } from './layout/app-layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/app-layout/main-layout/main-layout.component';
import { fakeBackendProvider } from './core/interceptor/fake-backend';
import { ErrorInterceptor } from './core/interceptor/error.interceptor';
import { JwtInterceptor } from './core/interceptor/jwt.interceptor';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient,
} from '@angular/common/http';

import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { NgScrollbarModule } from 'ngx-scrollbar';
import { SharedModule } from '@shared';
import { CoreModule } from '@core';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { AgreementComponent } from './modules/ERP/Customer/agreement/agreement.component';
import { ProposalComponent } from './modules/ERP/Prospect/proposal/proposal.component';
//import { StyleSwitcherComponent } from './style-switcher/style-switcher.component';
// import { StylesComponent } from './styles/styles/styles.component';
// import { ThemeComponent } from './styles/theme/theme.component';
// import { FontSizeComponent } from './styles/theme/font-size/font-size.component';
// import { SecurityStatusComponent } from './modules/Connector/security-status/security-status.component';
// import { AlertingComponent } from './modules/Connector/alerting/alerting.component';
// import { HighAvailabilityComponent } from './modules/Connector/high-availability/high-availability.component';
// import { HardwareMetricsComponent } from './modules/Connector/hardware-metrics/hardware-metrics.component';
// import { ConfigurationComponent } from './modules/Connector/configuration/configuration.component';
//import { MessageComponent } from './message/message/message.component';
//import { GeneralSettingsComponent } from './setting/general-settings/general-settings.component';
//import { SharedComponent } from './setting/shared/shared.component';
//import { PaymentSettingsComponent } from './setting/payment-settings/payment-settings.component';
//import { PricingPackageComponent } from './setting/pricing-package/pricing-package.component';
//import { AddCompanyComponent } from './Company/add-company/add-company.component';
// import { AllcompanyComponent } from './Company/allcompany/allcompany.component';

export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageLoaderComponent,
    SidebarComponent,
    RightSidebarComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    AgreementComponent,
    ProposalComponent,

   // StyleSwitcherComponent,
    // StylesComponent,
    // ThemeComponent,
    // FontSizeComponent,
   // SecurityStatusComponent,
   // AlertingComponent,
   // HighAvailabilityComponent,
   // HardwareMetricsComponent,
   // ConfigurationComponent,
    //MessageComponent,
    //GeneralSettingsComponent,
   // SharedComponent,
    //PaymentSettingsComponent,
    //PricingPackageComponent,
    // AddCompanyComponent,
    // AllcompanyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgScrollbarModule,
    MatTableModule,
    MatDialogModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    LoadingBarRouterModule,
    // core & shared
    CoreModule,
    SharedModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
