import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AddUserComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatButtonModule,
  ]
})
export class UserModule { }
