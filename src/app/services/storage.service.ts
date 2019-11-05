import { Injectable } from '@angular/core';
import { User } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly USER_KEY = 'TODO-user';

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
}
