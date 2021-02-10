export interface FriendsItem {
  id: number;
  url: string;
  title: string;
}

export interface TabsItem {
  id: number;
  title: string;
}

export interface ArtistsItem {
  id: number;
  url: string;
  title: string;
  img: string;
}

export interface navigationList {
  id: number;
  url: string;
  title: string;
  icon: object;
}

export interface SongsItem {
  id: number;
  icon: boolean;
  title: string;
  explicit: boolean;
  plays: string;
  length: string;
  popularity: boolean;
  img: string;
}
