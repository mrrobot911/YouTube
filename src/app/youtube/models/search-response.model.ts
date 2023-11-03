import { SearchItem } from './search-item.model';

interface PageInfo {
  totalResults: number,
  resultsPerPage: number,
}
export interface SearchResponce {
  kind: string,
  etag: string,
  pageInfo: PageInfo,
  items: Array<SearchItem>
}
