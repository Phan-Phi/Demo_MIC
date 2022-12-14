import { MetaItem } from "./utils";

export type GALLERY_DETAIL_ITEMS = {
  content: {
    block_type: string;
    value: string | Node;
  }[];
  id: number;
  last_published_at: string;
  meta: MetaItem;
  title: string;
  thumbnail: string;
  is_on_homepage: boolean;
};

export type GALLERY_LISTING_ITEMS = {
  id: number;
  last_published_at: string;
  meta: {}[];
  title: string;
};
