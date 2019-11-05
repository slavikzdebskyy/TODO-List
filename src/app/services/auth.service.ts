import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

import { User } from '../shared/interfaces';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly MOCK_USER_DATA: User = {
    name: 'Vasil',
    lastName: 'Alibabaevich',
    email: 'test@domain.url',
    age: 30,
    id: '30-vasil-alibabaevich',
  }
  private readonly MOCK_USER_PASSWORD: string = 'qwerty123';

  constructor(
    private storageService: StorageService,
    private router: Router,
    ) { }

  public login(email: string, password: string): Observable<User> {
    if (this.MOCK_USER_DATA.email === email && this.MOCK_USER_PASSWORD === password) {
      return new Observable<User>((observer: Subscriber<User>) => {
        observer.next(this.MOCK_USER_DATA);
      });
    }
    return new Observable<User>((observer: Subscriber<User>) => {
      observer.error({msg: 'Wrong credentials'});
    });
  }

  public logout(): void {
    this.storageService.removeUser();
    this.router.navigate(['']);
  }

}
