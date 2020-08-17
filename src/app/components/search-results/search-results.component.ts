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

  constructor(private http: HttpClient, private data: DataService, private sortConfig: SortConfig) {
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
      this.http.get<SearchResponse>(this.url)
        .subscribe((searchResponse: SearchResponse) => this.searchResponse = searchResponse);
    }
  }

  public ngOnInit(): void {
    this.http.get<SearchResponse>(this.url)
      .subscribe((searchResponse: SearchResponse) => this.searchResponse = searchResponse);
    this.data.currentResultsHiddenState.subscribe(hidden => this.hidden = hidden);
    this.sortConfig.currentSortType.subscribe(sortType => this.sortResults(sortType));
  }
}
