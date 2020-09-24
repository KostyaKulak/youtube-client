import {NgModule} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@NgModule({
              imports: [
                  CommonModule,
                  SharedModule,
                  MatCardModule
              ],
  declarations: [HeaderComponent, NotFoundComponent],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
