import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

  // Services
import { StorageService } from 'src/app/services';

  // Modules
import { Constants } from '../constants/constants.module';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private storageService: StorageService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.storageService.isLogined()) {
      this.router.navigate([Constants.ROUTERS.LOGIN], { replaceUrl: true });
      return false;
    }
    return true;
    }
}
