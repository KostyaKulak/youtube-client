import { SearchItem } from './search-item.model';
import { PageInfo } from './pageI-info.model';

export interface SearchResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: SearchItem[];
}
