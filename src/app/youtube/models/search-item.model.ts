import {Snippet} from './snippet.model';
import {Statistics} from './statistics.model';
import {Id} from './id.model';

export interface SearchItem {
  kind: string;
  etag: string;
  id: Id | string;
  snippet: Snippet;
  statistics: Statistics;
}
