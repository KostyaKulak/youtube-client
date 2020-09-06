import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../core/services/data.service';
import {SortConfig} from '../../../config/sort.config';
import {SortType} from '../../../config/sort.type';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  public hidden: boolean;
  public filterForm: FormGroup;

  constructor(private fb: FormBuilder, private data: DataService, private sortConfig: SortConfig) {
  }

  public ngOnInit(): void {
    this.data.currentFilterHiddenState.subscribe(hidden => this.hidden = hidden);
    this.createForm();
  }

  public createForm(): void {
    this.filterForm = this.fb.group(
      {word: ['', [Validators.required]]},
      {updateOn: 'blur'}
    );
  }

  public sortResults(sortType: SortType): void {
    this.sortConfig.changeSortType(sortType);
  }

  public sortResultsByDate(): void {
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

  public sortResultsByCountOfViews(): void {
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

  public filterResultsByWord(): void {
    let word: string = this.filterForm.get('word').value;
    this.data.changeFilterValue(word);
  }
}
