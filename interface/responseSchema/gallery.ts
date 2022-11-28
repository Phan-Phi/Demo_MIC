import { MetaItem } from "./utils";

export type GALLERY_DETAIL_ITEMS = {
  content: {}[];
  id: number;
  last_published_at: string;
  meta: MetaItem;
  title: string;
  thumbnail: string;
  is_on_homepage: boolean;
};

export type NEW_LISTING_ITEMS = {
  id: number;
  last_published_at: string;
  meta: {}[];
  title: string;
};
