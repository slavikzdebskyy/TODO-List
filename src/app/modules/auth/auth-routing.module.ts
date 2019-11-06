import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

  // Modules
import { Constants } from '..';

  //  Components
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: Constants.ROUTERS.EMPTY,
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
