import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {SortConfig} from '../../config/sort.config';
import {SortType} from '../../config/sort.type';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  public hidden: boolean;

  constructor(private data: DataService, private sortConfig: SortConfig) {
  }

  public ngOnInit(): void {
    this.data.currentFilterHiddenState.subscribe(hidden => this.hidden = hidden);
  }

  public sortResults(sortType: SortType): void {
    this.sortConfig.changeSortType(sortType);
  }

  public sortResultsDate(): void {
    let currentSortType: SortType;
    this.sortConfig.currentSortType.subscribe(sortType => currentSortType = sortType);
    switch (currentSortType) {
      case SortType.DATE_ASC:
        this.sortResults(SortType.DATE_DEC);
        break;
      case SortType.DATE_DEC:
        this.sortResults(SortType.DEFAULT);
        break;
      default:
        this.sortResults(SortType.DATE_ASC);
        break;
    }
  }

  public sortResultsCountOfViews(): void {
    let currentSortType: SortType;
    this.sortConfig.currentSortType.subscribe(sortType => currentSortType = sortType);
    switch (currentSortType) {
      case SortType.COUNT_OF_VIEWS_ASC:
        this.sortResults(SortType.COUNT_OF_VIEWS_DEC);
        break;
      case SortType.COUNT_OF_VIEWS_DEC:
        this.sortResults(SortType.DEFAULT);
        break;
      default:
        this.sortResults(SortType.COUNT_OF_VIEWS_ASC);
        break;
    }
  }
}
