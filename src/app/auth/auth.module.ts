import {NgModule} from '@angular/core';
import {AuthRoutingModule} from './auth-routing.module';
import { LoginComponent } from './page/login/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
            declarations: [LoginComponent],
            imports: [AuthRoutingModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule]
          })
export class AuthModule {
}
