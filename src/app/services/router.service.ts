import { Routes } from '@angular/router';

  //  Modules
import { Constants } from '../modules';

  // Components
import { LayoutComponent } from '../core/layout/layout.component';


export class Route {
  static withLayout(routes: Routes): Routes {
    return [
      {
        path: Constants.ROUTERS.EMPTY,
        component: LayoutComponent,
        children: routes,
      },
    ];
  }
}
