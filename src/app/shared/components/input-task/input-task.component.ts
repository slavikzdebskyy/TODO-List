import { Component, Output, EventEmitter } from '@angular/core';

import { Task } from '../../interfaces';

@Component({
  selector: 'tdl-input-task',
  templateUrl: './input-task.component.html',
  styleUrls: ['./input-task.component.scss']
})
export class InputTaskComponent {

  public title: string;

  @Output()
  public addTask: EventEmitter<string>;

  constructor() {
    this.title = '';
    this.addTask = new EventEmitter<string>();
  }

  public onAddTask() {
    this.addTask.emit(this.title);
    this.title = '';
  }



}
