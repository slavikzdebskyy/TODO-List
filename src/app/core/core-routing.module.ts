import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

  //  Modules
import { Constants } from '../modules';

  // Components
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: Constants.ROUTERS.EMPTY,
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
