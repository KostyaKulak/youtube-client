import {Injectable} from '@angular/core';
import {CanActivate, CanLoad, Router, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthUserService} from '../../core/services/auth-user.service';
import {LOGIN_PAGE} from '../../constants/common';

@Injectable({
              providedIn: 'root'
            })
export class UnauthGuard implements CanActivate, CanLoad {
  constructor(private authUserService: AuthUserService, private router: Router) {
  }

  private alreadyLogin(): boolean {
    const isAuthorized: boolean = this.authUserService.isAuthorized;
    if (!isAuthorized) {
      this.router.navigate([`/${LOGIN_PAGE}`]);
    }
    return isAuthorized;
  }

  public canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.alreadyLogin();
  }

  public canLoad():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.alreadyLogin();
  }
}
