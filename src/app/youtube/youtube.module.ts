import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {YoutubeRoutingModule} from './youtube.routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailedInfoComponent } from './pages/detailed-info/detailed-info.component';



@NgModule({
  declarations: [MainPageComponent, DetailedInfoComponent],
  imports: [
    CommonModule,
    YoutubeRoutingModule
  ]
})
export class YoutubeModule { }
