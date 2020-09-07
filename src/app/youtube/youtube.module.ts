import { NgModule } from '@angular/core';
import { YoutubeRoutingModule } from './youtube.routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailedInfoComponent } from './pages/detailed-info/detailed-info.component';
import {FilterComponent} from './components/filter/filter.component';
import {SearchResultsComponent} from './components/search-results/search-results.component';
import {SearchItemCardComponent} from './components/search-item-card/search-item-card.component';
import {SearchItemComponent} from './components/search-item/search-item.component';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
            imports: [
              SharedModule,
              YoutubeRoutingModule,
              MatCardModule,
              MatTabsModule
            ],
  declarations: [
    MainPageComponent,
    DetailedInfoComponent,
    FilterComponent,
    SearchResultsComponent,
    SearchItemCardComponent,
    SearchItemComponent
  ],
  exports: [
    MainPageComponent,
    DetailedInfoComponent,
    FilterComponent,
    SearchResultsComponent,
    SearchItemCardComponent,
    SearchItemComponent
  ]
})
export class YoutubeModule {
}
