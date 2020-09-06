import {User} from '../../shared/models/user.model';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthUserService {
  isAuthorized: boolean;

  login(user: User): Observable<boolean> {
    return;
  }
}
