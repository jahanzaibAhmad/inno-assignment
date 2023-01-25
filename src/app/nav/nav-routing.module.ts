import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu.component';


const myChildren: any = [
  {
    path: 'home',
    loadChildren: () => import('@app/home/home.module').then(m => m.HomeModule),
    data: {
      preload: false
    },
  }
]

const routes: Routes = [
  {
    path: '',
    component: NavMenuComponent,
    children: [...myChildren]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }
