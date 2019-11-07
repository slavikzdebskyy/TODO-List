import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Task } from '../../interfaces';

@Component({
  selector: 'tdl-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input()
  public tasks: Task[];

  @Output()
  public remove: EventEmitter<Task>;
  @Output()
  public done: EventEmitter<Task>;

  constructor() {
    this.tasks = [];
    this.remove = new EventEmitter<Task>();
    this.done = new EventEmitter<Task>();
  }

  public onRemove(task: Task): void {
    this.remove.emit(task);
  }

  public onDone(task: Task): void {
    this.done.emit(task);
  }

}
