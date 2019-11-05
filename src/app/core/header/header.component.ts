import { Component, OnInit } from '@angular/core';

  //  Services
import { AuthService } from './../../services/auth.service';
import { StorageService } from './../../services/storage.service';

@Component({
  selector: 'tdl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
  )
     { }

  public get isLogined(): boolean {
    return this.storageService.isLogined();
  }

  public logout(): void {
    this.authService.logout();
  }

}
