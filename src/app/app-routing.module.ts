import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

  //  Modules
import { Constants } from './modules';


const routes: Routes = [
  {
    path: Constants.ROUTERS.EMPTY,
    loadChildren: './core/core.module#CoreModule',
  },
  {
    path: Constants.ROUTERS.LOGIN,
    loadChildren: './modules/auth/auth.module#AuthModule',
  },
  {
    path: '**',
    redirectTo: Constants.ROUTERS.EMPTY,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
