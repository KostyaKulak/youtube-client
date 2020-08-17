import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataService {
  private resultSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public currentHiddenState: Observable<boolean> = this.resultSource.asObservable();

  constructor() {
  }

  public displayResults(): void {
    this.resultSource.next(false);
  }
}
