import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

  // Modules
import { CoreRoutingModule } from './core-routing.module';
import { ComponentsModule } from '../shared/components';
import { MaterialModule } from '../modules';

  //  Components
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule,
    ComponentsModule,
  ]
})
export class CoreModule { }
