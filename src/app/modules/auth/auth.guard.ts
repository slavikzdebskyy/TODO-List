import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

  // Services
import { StorageService } from 'src/app/services';

  // Modules
import { Constants } from '../constants/constants.module';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private router: Router,
    private storageService: StorageService
  ) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      if (!this.storageService.isLogined) {
        this.router.navigate([Constants.ROUTERS.LOGIN], { replaceUrl: true });
        return false;
      }
    return true;
  }
}
