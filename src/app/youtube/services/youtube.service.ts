import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResponse } from '../models/search-response.model';
import { Observable, Subject } from 'rxjs';
import { Id } from '../models/id.model';

@Injectable({ providedIn: 'root' })
export class YoutubeService {
  private readonly apiKey: string = 'AIzaSyCPuXCcoVDSgTkZcBaF3YP9zZn-u42g9iY';
  private readonly maxResults: number = 15;
  private readonly searchUrl: string = `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&type=video&part=snippet&maxResults=${this.maxResults}&q=`;
  private readonly videosUrl: string = `https://www.googleapis.com/youtube/v3/videos?key=${this.apiKey}&id=ids&part=snippet,statistics`;
  public currentData: Subject<SearchResponse> = new Subject<SearchResponse>();
  public response: SearchResponse;
  public query: string = '';

  constructor(private http: HttpClient) {}

  public searchYouTubeData(query: string): Observable<SearchResponse> | void {
    if (this.query !== query) {
      this.query = query;
      return this.http.get<SearchResponse>(this.searchUrl + this.query);
    }
  }

  public fetchVideos(response: SearchResponse): Observable<SearchResponse> {
    const ids: string = response.items
      .map((item) => (item.id as Id).videoId)
      .join(',');
    return this.http.get<SearchResponse>(this.videosUrl.replace('ids', ids));
  }
}
