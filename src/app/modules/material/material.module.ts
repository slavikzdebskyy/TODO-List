import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

  //  Modules
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

const MODULES: any = [
  CommonModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatTooltipModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatListModule,
  MatTabsModule,
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
