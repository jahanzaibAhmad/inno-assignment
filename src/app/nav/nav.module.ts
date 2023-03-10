import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavRoutingModule } from './nav-routing.module';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SharedModule } from '@app/shared/module/shared/shared.module';


@NgModule({
  declarations: [
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    NavRoutingModule,
    SharedModule /** Created shared module and added only module here which is going to use in whole app */
  ]
})
export class NavModule { }
