type Thumbnails = {
  url: string,
  width: number,
  height: number,
};
interface ThumbnailsList {
  default: Thumbnails,
  medium: Thumbnails,
  high: Thumbnails,
  standard: Thumbnails,
  maxres: Thumbnails
}
type Statistics = {
  viewCount: string,
  likeCount: string,
  dislikeCount: string,
  favoriteCount: string,
  commentCount: string
};
type Localized = {
  title: string,
  description: string
};
interface Snippet {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: ThumbnailsList,
  channelTitle: string,
  tags: Array<string>,
  categoryId: string,
  liveBroadcastContent: string,
  defaultLanguage?: string,
  localized: Localized,
  defaultAudioLanguage: string,
}
export interface SearchItem {
  kind: string,
  etag: string,
  id: string,
  snippet: Snippet,
  statistics: Statistics,
}
