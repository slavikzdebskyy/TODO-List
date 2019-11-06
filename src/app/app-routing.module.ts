import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

  //  Modules
import { Constants } from './modules';


  //  Services
import { AuthGuard } from './modules/auth/auth.guard';
import { Route } from './services';


const routes: Routes =  Route.withLayout([
  {
    path: Constants.ROUTERS.EMPTY,
    loadChildren: './core/core.module#CoreModule',
    canActivate: [AuthGuard],
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
]);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
