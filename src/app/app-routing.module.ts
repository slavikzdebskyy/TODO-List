import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

  //  Modules
import { Constants } from './modules';
import { AuthGuard } from './modules/auth/auth.guard';


const routes: Routes = [
  {
    path: Constants.ROUTERS.EMPTY,
    loadChildren: './core/core.module#CoreModule',
    canLoad: [AuthGuard],
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
