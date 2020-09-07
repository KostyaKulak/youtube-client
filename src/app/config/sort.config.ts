import { Injectable } from '@angular/core';
import { SortType } from './sort.type';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SortConfig {
  private sortTypeSource: BehaviorSubject<SortType> = new BehaviorSubject<SortType>(SortType.DEFAULT);
  public currentSortType: Observable<SortType> = this.sortTypeSource.asObservable();

  constructor() {
  }

  public changeSortType(sortType: SortType): void {
    this.sortTypeSource.next(sortType);
  }
}
