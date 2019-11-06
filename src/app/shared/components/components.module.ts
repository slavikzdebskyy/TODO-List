import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const COMPONENTS: any = [];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
