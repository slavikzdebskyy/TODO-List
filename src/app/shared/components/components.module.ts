import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

  //  Components
import { TodoListComponent } from './todo-list/todo-list.component';

  //  Modules
import { MaterialModule } from 'src/app/modules';
import { InputTaskComponent } from './input-task/input-task.component';
import { FormsModule } from '@angular/forms';

const COMPONENTS: any = [
  TodoListComponent,
  InputTaskComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ]
})
export class ComponentsModule { }
