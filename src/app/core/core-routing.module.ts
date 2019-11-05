import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

  //  Services
import { Route } from '../services';

  //  Modules
import { Constants } from '../modules';

  // Components
import { HomeComponent } from './home/home.component';


const routes: Routes = Route.withLayout([
  {
    path: Constants.ROUTERS.EMPTY,
    component: HomeComponent,
  },
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
