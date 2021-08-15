import {User} from '../../shared/models/user.model';
import {Observable, of, Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {UserHolderService} from './user-holder.service';
import {map, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {LOGIN_PAGE} from '../../constants/common';

@Injectable({providedIn: 'root'})
export class AuthUserService {
  private user: Subject<User>;

  public isAuthorized: boolean = false;

  constructor(private router: Router, private userHolderService: UserHolderService) {
    this.user = new Subject<User>();
    this.user.asObservable().subscribe((user) => this.isAuthorized = !!user);
  }

  private clear(): void {
    this.userHolderService.clearLastUser();
    this.user.next(null);
  }

  public login(user: User): Observable<boolean> {
    return this.userHolderService.verifyUser(user).pipe(
      tap(token => {
        if (token) {
          user.token = token;
          user.password = '';
          this.userHolderService.saveLastUser(user);
          this.user.next(user);
        } else {
          this.clear();
        }
      }),
      map(token => !!token)
    );
  }

  public logout(): Observable<boolean> {
    this.clear();
    this.router.navigate([`/${LOGIN_PAGE}`]);
    return of(true);
  }
}
