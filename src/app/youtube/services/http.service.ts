import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SearchResponse} from '../models/search-response.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class HttpService {
  private readonly url: string = 'http://localhost:8090/youtube/response';

  constructor(private http: HttpClient) {
  }

  public fetchYouTubeData(): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(this.url);
  }
}
