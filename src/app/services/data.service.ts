import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataService {
  private resultSource = new BehaviorSubject<boolean>(true);
  currentHiddenState = this.resultSource.asObservable();

  constructor() {
  }

  displayResults() {
    this.resultSource.next(false);
  }
}
