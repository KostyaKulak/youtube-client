import {Component, OnInit} from '@angular/core';
import {SearchResponse} from '../../models/search-response.model';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  private readonly url: string = 'http://localhost:8090/youtube/response';
  public searchResponse: SearchResponse;
  public hidden: boolean;

  constructor(private http: HttpClient, private data: DataService) {
  }

  public ngOnInit(): void {
    this.http.get<SearchResponse>(this.url)
      .subscribe((searchResponse: SearchResponse) => this.searchResponse = searchResponse);
    this.data.currentResultsHiddenState.subscribe(hidden => this.hidden = hidden);
  }
}
