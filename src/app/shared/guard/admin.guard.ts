import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {UserHolderService} from '../../core/services/user-holder.service';

@Injectable({
              providedIn: 'root'
            })
export class AdminGuard implements CanActivate, CanLoad {
  constructor(private userHolderService: UserHolderService) {
  }

  public canLoad():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.userHolderService.isAdmin();
  }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userHolderService.isAdmin();
  }

}
