import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

  // Modules
import { Constants } from '..';


const routes: Routes = [
  {
    path: Constants.ROUTERS.EMPTY,
    redirectTo: Constants.ROUTERS.LOGIN,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
