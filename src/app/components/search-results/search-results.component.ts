import {Component, OnInit} from '@angular/core';
import {SearchResponse} from '../../models/search-response.model';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../../services/data.service';
import {SortType} from '../../config/sort.type';
import {SortConfig} from '../../config/sort.config';
import {SearchItem} from '../../models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  private readonly url: string = 'http://localhost:8090/youtube/response';
  public searchResponse: SearchResponse;
  public hidden: boolean;
  public filtered: boolean = false;

  constructor(private http: HttpClient, private data: DataService, private sortConfig: SortConfig) {
  }

  private fetchYouTubeData(): void {
    this.http.get<SearchResponse>(this.url)
      .subscribe((searchResponse: SearchResponse) => this.searchResponse = searchResponse);
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
    this.data.currentResultsHiddenState.subscribe(hidden => this.hidden = hidden);
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
