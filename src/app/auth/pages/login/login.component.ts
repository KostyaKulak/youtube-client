import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthUserService} from '../../../core/services/auth-user.service';
import {UserHolderService} from '../../../core/services/user-holder.service';
import {
  EMAIL_PATTERN,
  HOME_PAGE,
  LOGOUT_PAGE,
  MIN_LOGIN_LENGTH,
  MIN_PASSWORD_LENGTH
} from '../../../constants/common';
import {User} from '../../../shared/models/user.model';
import {NavigationEnd, Router} from '@angular/router';

@Component({
             selector: 'app-login',
             templateUrl: './login.component.html',
             styleUrls: ['./login.component.css']
           })
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public registerForm: FormGroup;
  public loading: boolean;
  public previousUrl: string;

  constructor(
    private router: Router,
    private authUserService: AuthUserService,
    private userHolderService: UserHolderService
  ) {
    this.router.events.subscribe({
                                   next: (event) => {
                                     if (event instanceof NavigationEnd) {
                                       if (event.url.includes(LOGOUT_PAGE)) {
                                         this.authUserService.logout();
                                       }
                                     }
                                   },
                                   error: null,
                                   complete: () => {
                                   }
                                 });
  }

  private handleLogin(user: User): void {
    if (user.name && (user.password || user.token)) {
      this.loading = true;
      this.loginForm.controls.password.setValue('');
      this.authUserService.login(user).subscribe({
                                                   next: (success) => {
                                                     if (success) {
                                                       this.router.navigate([`/${HOME_PAGE}`]);
                                                     }
                                                   },
                                                   error: null,
                                                   complete: () => this.loading = false
                                                 });
    }
  }

  public ngOnInit(): void {
    this.loginForm = new FormGroup({
                                     login: new FormControl(null, [
                                       Validators.required,
                                       Validators.minLength(MIN_LOGIN_LENGTH),
                                     ]),
                                     password: new FormControl(null, [
                                       Validators.required,
                                       Validators.minLength(MIN_PASSWORD_LENGTH),
                                     ])
                                   });
    this.registerForm = new FormGroup({
                                        login: new FormControl(null, [
                                          Validators.required,
                                          Validators.minLength(MIN_LOGIN_LENGTH),
                                        ]),
                                        email: new FormControl(null, [
                                          Validators.required,
                                          Validators.pattern(EMAIL_PATTERN)
                                        ]),
                                        password: new FormControl(null, [
                                          Validators.required,
                                          Validators.minLength(MIN_PASSWORD_LENGTH),
                                        ]),
                                        re_password: new FormControl(null, [
                                          Validators.required,
                                          Validators.minLength(MIN_PASSWORD_LENGTH),
                                        ])
                                      });
    const lastUser: User = this.userHolderService.loadLastUser();
    if (lastUser) {
      this.handleLogin(lastUser);
    }
  }

  public submitSignIn(): void {
    const name: string = this.loginForm.controls.login.value.trim();
    this.loginForm.controls.login.setValue(name);
    const password: string = this.loginForm.controls.password.value.trim();
    this.loginForm.controls.password.setValue(password);
    if (this.loginForm.valid) {
      this.handleLogin(new User(name, password));
    }
  }

  public submitSignUp(): void {
  }
}
