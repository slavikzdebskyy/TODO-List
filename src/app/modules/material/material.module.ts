import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

  //  Modules
import { MatButtonModule } from '@angular/material/button';

const MODULES: any = [
  CommonModule,
  MatButtonModule,
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  exports: [
    ...MODULES,
  ],
})
export class MaterialModule { }
