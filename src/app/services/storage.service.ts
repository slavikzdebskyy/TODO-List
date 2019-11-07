import { Injectable } from '@angular/core';
import { User, Task } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly USER_KEY = 'TODO-user';
  private readonly TODO_LIST_KEY = 'TODO-list';

  constructor() { }

  public getUser(): User {
    const userData: string = localStorage.getItem(this.USER_KEY);
    return JSON.parse(userData);
  }

  public setUser(user: User): void {
    const userData: string = JSON.stringify(user);
    localStorage.setItem(this.USER_KEY, userData);
  }

  public isLogined(): boolean {
    const userData: string = localStorage.getItem(this.USER_KEY);
    return !!userData;
  }

  public removeUser(): void {
    localStorage.removeItem(this.USER_KEY);
  }

  public saveTask(task: Task): void {
    const tasksData: string =  localStorage.getItem(this.TODO_LIST_KEY);
    const tasks: Task[] = tasksData ? [...JSON.parse(tasksData), task] : [task];
    localStorage.setItem(this.TODO_LIST_KEY, JSON.stringify(tasks));
  }

  public getTasks(): Task[] {
    const tasksData: string =  localStorage.getItem(this.TODO_LIST_KEY);
    return tasksData ? JSON.parse(tasksData) : [];
  }

  public removeTask(task: Task): void {
    const tasksData: string =  localStorage.getItem(this.TODO_LIST_KEY);
    const tasks: Task[] = JSON.parse(tasksData).filter((item: Task) => item.id != task.id);
    localStorage.setItem(this.TODO_LIST_KEY, JSON.stringify(tasks));
  }

  public updateTask(task: Task): void {
    const tasksData: string =  localStorage.getItem(this.TODO_LIST_KEY);
    const tasks: Task[] = JSON.parse(tasksData).map((item: Task) => {
      if (item.id === task.id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    localStorage.setItem(this.TODO_LIST_KEY, JSON.stringify(tasks));
  }
}
