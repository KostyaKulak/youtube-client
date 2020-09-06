import {User} from '../../shared/models/user.model';
import {Injectable} from '@angular/core';
import {Observable, throwError, timer} from 'rxjs';
import {mapTo} from 'rxjs/operators';
import {USER_HOLDER} from '../../constants/common';

const FAKE_FETCH_TIME: number = 1000;
const FAKE_TOKEN: string = 'token';
const FAKE_EXCEPTION: Error = new Error('User\'s error');

@Injectable({providedIn: 'root'})
export class UserHolderService {
  public verifyUser(user: User): Observable<string> {
    return (user?.name && (user?.password || user?.token))
      ? timer(FAKE_FETCH_TIME).pipe(mapTo(FAKE_TOKEN))
      : throwError(FAKE_EXCEPTION);
  }

  public saveLastUser(user: User): void {
    localStorage.setItem(USER_HOLDER, JSON.stringify(user));
  }

  public loadLastUser(): User {
    const savedUser: string = localStorage.getItem(USER_HOLDER);
    if (savedUser) {
      try {
        return JSON.parse(savedUser);
      } catch {
      }
    }
    return null;
  }

  public clearLastUser(): void {
    localStorage.removeItem(USER_HOLDER);
  }
}
