import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeFormComponent } from './home-form/home-form.component';
import { SharedModule } from '@app/shared/module/shared/shared.module';


@NgModule({
  declarations: [
    HomeFormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
