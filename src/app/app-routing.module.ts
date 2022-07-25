import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
      path:'home', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
    },
    {
      path:'', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
    },
    {
      path: 'user', loadChildren: () => import('./pages/user/user.module').then((m) => m.UserModule)
    },
    {
      path:'**', redirectTo: 'home', pathMatch:'full',
    },
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
