import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataService {
  private resultSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  private filterSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  private filterWordSource: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public currentResultsHiddenState: Observable<boolean> = this.resultSource.asObservable();
  public currentFilterHiddenState: Observable<boolean> = this.filterSource.asObservable();
  public currentFilterWord: Observable<string> = this.filterWordSource.asObservable();

  constructor() {
  }

  public displayResults(): void {
    this.resultSource.next(false);
  }

  public displayFilter(): void {
    this.filterSource.next(false);
  }

  public changeFilterValue(word: string): void {
    this.filterWordSource.next(word);
  }
}
