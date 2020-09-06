import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {DetailedInfoComponent} from './pages/detailed-info/detailed-info.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: ':id', component: DetailedInfoComponent}
];

@NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
          })
export class YoutubeRoutingModule {
}
