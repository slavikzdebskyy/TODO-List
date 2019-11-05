import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

  //  Modules
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

const MODULES: any = [
  CommonModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatTooltipModule,
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
