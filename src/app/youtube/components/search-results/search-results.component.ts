import {Component, OnInit} from '@angular/core';
import {SearchResponse} from '../../models/search-response.model';
import {DataService} from '../../../core/services/data.service';
import {SortType} from '../../../config/sort.type';
import {SortConfig} from '../../../config/sort.config';
import {SearchItem} from '../../models/search-item.model';
import {YoutubeService} from '../../services/youtube.service';
import {Observable} from 'rxjs';
import {Card} from '../../../shared/models/card.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  public searchResponse: SearchResponse;
  public cards: Observable<Card[]>;
  public filtered: boolean = false;

  constructor(
    private youtubeService: YoutubeService,
    private data: DataService,
    private sortConfig: SortConfig
  ) {  }

  private fetchYouTubeData(): void {
    this.youtubeService.currentData.asObservable().subscribe((response: SearchResponse) => {
      this.searchResponse = response;
    });
  }

  private sortResults(sortType: SortType): void {
    this.searchResponse?.items.sort((a: SearchItem, b: SearchItem) => {
      let compare: number;
      switch (sortType) {
        case SortType.DATE_ASC:
          compare = new Date(a.snippet.publishedAt).getMilliseconds()
            - new Date(b.snippet.publishedAt).getMilliseconds();
          break;
        case SortType.DATE_DEC:
          compare = new Date(b.snippet.publishedAt).getMilliseconds()
            - new Date(a.snippet.publishedAt).getMilliseconds();
          break;
        case SortType.COUNT_OF_VIEWS_ASC:
          compare = Number(a.statistics.viewCount) - Number(b.statistics.viewCount);
          break;
        case SortType.COUNT_OF_VIEWS_DEC:
          compare = Number(b.statistics.viewCount) - Number(a.statistics.viewCount);
          break;
        default:
          compare = 0;
          break;
      }
      return compare;
    });
    if (sortType === SortType.DEFAULT) {
      this.fetchYouTubeData();
    }
  }

  public ngOnInit(): void {
    this.fetchYouTubeData();
    this.sortConfig.currentSortType.subscribe(sortType => this.sortResults(sortType));
    this.data.currentFilterWord.subscribe(word => {
      if (word.length !== 0) {
        this.searchResponse.items = this.searchResponse.items
          .filter(value => value.snippet.title.includes(word));
        this.filtered = true;
      }
      if (this.filtered && word.length === 0) {
        this.filtered = false;
        this.fetchYouTubeData();
      }
    });
  }
}
