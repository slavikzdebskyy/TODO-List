import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

  //  Components
import { TodoListComponent } from './todo-list/todo-list.component';

  //  Modules
import { MaterialModule } from 'src/app/modules';

const COMPONENTS: any = [
  TodoListComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class ComponentsModule { }
