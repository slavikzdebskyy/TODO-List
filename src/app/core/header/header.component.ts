import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

  //  Services
import { AuthService } from './../../services/auth.service';
import { StorageService } from './../../services/storage.service';

  //  Modules
import { Constants } from 'src/app/modules';

@Component({
  selector: 'tdl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
  )
     { }

  public get isLogined(): boolean {
    return this.storageService.isLogined();
  }

  public logout(): void {
    this.authService.logout();
  }

}
