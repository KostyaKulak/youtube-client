import { Component, OnInit } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';
import {
  faComments,
  faEye,
  faHeart,
  faHeartBroken,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { YoutubeService } from '../../services/youtube.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-item-card',
  templateUrl: './search-item-card.component.html',
  styleUrls: ['./search-item-card.component.css'],
})
export class SearchItemCardComponent implements OnInit {
  public faEye: IconDefinition = faEye;
  public faHeart: IconDefinition = faHeart;
  public faHeartBroken: IconDefinition = faHeartBroken;
  public faComments: IconDefinition = faComments;
  public item: SearchItem;
  public borderClass: string;
  public loading: boolean;

  constructor(
    private youtubeService: YoutubeService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.item = this.youtubeService.response.items.find(
        (item) => item.id === params.id
      );
    });
  }

  public ngOnInit(): void {}
}
