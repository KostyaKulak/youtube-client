import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthUserService} from '../../../../core/services/auth-user.service';
import {UserHolderService} from '../../../../core/services/user-holder.service';
import {LIST_PAGE, MIN_LOGIN_LENGTH, MIN_PASSWORD_LENGTH} from '../../../../constants/common';
import {User} from '../../../../shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading: boolean;

  constructor(
    private router: Router,
    private authUserService: AuthUserService,
    private userHolderService: UserHolderService
  ) {
  }

  private handleLogin(user: User): void {
    if (user.name && (user.password || user.token)) {
      this.loading = true;
      this.loginForm.controls.password.setValue('');
      this.authUserService.login(user).subscribe(
        (success) => {
          if (success) {
            this.router.navigate([`/${LIST_PAGE}`]);
          }
        },
        null,
        () => this.loading = false
      );
    }
  }

  ngOnInit(): void {
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
    const lastUser: User = this.userHolderService.loadLastUser();
    if (lastUser) {
      this.handleLogin(lastUser);
    }
  }

  submit(): void {
    const name: string = this.loginForm.controls.login.value.trim();
    this.loginForm.controls.login.setValue(name);
    const password: string = this.loginForm.controls.password.value.trim();
    this.loginForm.controls.password.setValue(password);
    if (this.loginForm.valid) {
      this.handleLogin(new User(name, password));
    }
  }
}
