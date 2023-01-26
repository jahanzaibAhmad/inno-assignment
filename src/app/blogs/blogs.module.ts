import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { SharedModule } from '@app/shared/module/shared/shared.module';


@NgModule({
  declarations: [
    BlogFormComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    SharedModule
  ]
})
export class BlogsModule { }
