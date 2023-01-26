import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PageBarComponent } from '@app/page-bar/page-bar.component';


@NgModule({
  declarations: [
    PageBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ], 
  exports: [
    MaterialModule,
    PageBarComponent
  ]
})
export class SharedModule { }
