import {Component, OnInit} from '@angular/core';
import {SearchResponse} from '../../models/search-response.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  readonly url = "http://localhost:8090/youtube/response";
  public searchResponse: SearchResponse;

  constructor(private http: HttpClient) {}


  public ngOnInit(): void {
    this.http.get<SearchResponse>(this.url)
      .subscribe((searchResponse: SearchResponse) => this.searchResponse = searchResponse);
  }
}
