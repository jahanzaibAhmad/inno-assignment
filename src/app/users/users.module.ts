import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserFormComponent } from './user-form/user-form.component';
import { SharedModule } from '@app/shared/module/shared/shared.module';
import { UserBlockListComponent } from './user-block-list/user-block-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    UserFormComponent,
    UserBlockListComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class UsersModule { }
