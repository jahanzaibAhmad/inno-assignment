import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PageBarComponent } from '@app/page-bar/page-bar.component';

 /** Created shared module and added only module here which is going to use in whole app */
@NgModule({
  declarations: [
    PageBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule, /** As we are using Material in whole app, added it here in shared module */
  ], 
  exports: [
    MaterialModule,
    PageBarComponent
  ]
})
export class SharedModule { }
