import { Component } from '@angular/core';
import { StorageService } from 'src/app/services';
import { Task } from 'src/app/shared/interfaces';

@Component({
  selector: 'tdl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public tasks: Task[];

  constructor(private storageService: StorageService) {
    this.tasks = this.storageService.getTasks();
   }

  public onAddTask(title: string): void {
    this.storageService.saveTask(title);
    this.update();
  }

  public onRemove(task: Task): void {
    this.storageService.removeTask(task);
    this.update();
  }

  public onDone(task: Task): void {
    this.storageService.updateTask(task);
    this.update();
  }

  public get isTasks(): boolean {
    return !!this.tasks.length;
  }

  public get doneTasks(): Task[] {
    return this.tasks.filter((task: Task) => task.isDone);
  }

  public get todoTasks(): Task[] {
    return this.tasks.filter((task: Task) => !task.isDone);
  }

  private update(): void {
    this.tasks = this.storageService.getTasks();
  }

}
