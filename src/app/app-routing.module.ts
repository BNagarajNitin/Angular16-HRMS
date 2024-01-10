import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { Page404Component } from './authentication/page404/page404.component';
import { AuthGuard } from './core/guard/auth.guard';
import { Role } from './core/models/role';

import { AuthLayoutComponent } from './layout/app-layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/app-layout/main-layout/main-layout.component';
import { Page404Component } from '@core/authentication/page404/page404.component';
//import { Page404Component } from './authentication/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/authentication/signin', pathMatch: 'full' },
      {
        path: 'admin',
        canActivate: [AuthGuard],
        data: {
          role: Role.Admin,
        },
        loadChildren: () =>
          import('./modules/Superadmin/admin/admin.module').then((m) => m.AdminModule),
      },




      {
        path: 'Users',
        loadChildren: () =>
          import('./modules/Superadmin/Users/user.module').then(
            (m) =>m.UserModule
          ),
      },
      {
        path: 'setting',
        loadChildren: () =>
          import('./modules/Superadmin/setting/setting.module').then(
            (m) =>m.SettingModule
          ),
      },
      {
        path: 'Company',
        loadChildren: () =>
          import('./modules/Superadmin/Company/company.module').then(
            (m) =>m.CompanyModule
          ),
      },
      {
        path: 'Connector',
        loadChildren: () =>
          import('./modules/Connector/connector.module').then(
            (m) =>m.ConnectorModule
          ),
      },

      {
        path: 'Styles',
        loadChildren: () =>
          import('./styles/styles.module').then(
            (m) =>m.StylesModule
          ),
      },
      {
        path: 'ERP',
        loadChildren: () =>
          import('./modules/ERP/erp.module').then(
            (m) =>m.ErpModule
          ),
      },




    ],
  },

  {
    path: 'authentication',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./core/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  { path: '**', component: Page404Component },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
