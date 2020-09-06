import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LIST_PAGE, LOGIN_PAGE} from './constants/common';
import {UnauthGuard} from './shared/guard/unauth.guard';
import {NotFoundComponent} from './core/pages/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: LOGIN_PAGE,
    loadChildren: () =>
      import('src/app/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: LIST_PAGE,
    canActivate: [UnauthGuard],
    canLoad: [UnauthGuard],
    loadChildren: () =>
      import('src/app/youtube/youtube.module').then((m) => m.YoutubeModule),
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
          })
export class AppRoutingModule {
}
