import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/app/home', pathMatch: 'full' }, /** App load default path or landing page for plain url */
  {
    path: 'app', /** Nav module added for navigation inside the app (It decrease the load on app module if we have auth or other module in future) */
    loadChildren: () => import('@app/nav/nav.module').then(m => m.NavModule),
    data: {
      preload: false, /** Added this variable in route for preloading strategy in future (if required) */
    },
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
