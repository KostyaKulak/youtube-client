import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ADMIN_PAGE, HOME_PAGE, LOGIN_PAGE, LOGOUT_PAGE} from './constants/common';
import {UnauthGuard} from './shared/guard/unauth.guard';
import {NotFoundComponent} from './core/pages/not-found/not-found.component';
import {AdminComponent} from './youtube/pages/admin/admin.component';
import {AdminGuard} from './shared/guard/admin.guard';

const routes: Routes = [
  {path: '', redirectTo: LOGIN_PAGE, pathMatch: 'full'},
  {
    path: LOGOUT_PAGE,
    loadChildren: () =>
      import('src/app/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: ADMIN_PAGE,
    component: AdminComponent,
    canActivate: [AdminGuard] ,
    canLoad: [AdminGuard]
  },
  {
    path: LOGIN_PAGE,
    loadChildren: () =>
      import('src/app/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: HOME_PAGE,
    canActivate: [UnauthGuard],
    canLoad: [UnauthGuard],
    loadChildren: () =>
      import('src/app/youtube/youtube.module').then((m) => m.YoutubeModule),
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
