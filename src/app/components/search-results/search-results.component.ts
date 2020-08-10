import {Component, Input, OnInit} from '@angular/core';
import { SearchResponse } from '../../models/search-response.model';
import * as data  from './response.json'

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  public searchResponse: SearchResponse = <SearchResponse><unknown>data;

  constructor() {}

  public ngOnInit(): void {
    console.log(this.searchResponse.items);
  }
}
