import { MetaItem } from "./utils";

export type MetaParentNews = {
  id: number;
  title: string;
  meta: { detail_url: string; html_url: null; type: string };
};

export type NEW_DETAIL_ITEMS = {
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

export type NEW_LISTING_ITEMS = {
  id: number;
  last_published_at: string;
  meta: {}[];
  title: string;
};
