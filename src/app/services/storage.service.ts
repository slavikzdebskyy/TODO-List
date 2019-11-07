import { Injectable } from '@angular/core';
import { User, Task } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly USER_KEY: string = 'TODO-user';
  private readonly TODO_LIST_KEY: string = 'TODO-list';
  private readonly ID_LENGTH: number = 12;
  private readonly CHARACTERS: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

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

  public saveTask(title: string): void {
    const task: Task = {
      title,
      id: this.generateId(),
      isDone: false,
    }

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

  private generateId(): string {
    let result = '';
    const charactersLength = this.CHARACTERS.length;
    for ( let i = 0; i < this.ID_LENGTH; i++ ) {
       result += this.CHARACTERS.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
 }

}
