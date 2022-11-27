import { MetaItem } from "./utils";

interface CAROUSEL {
  block_type: string;
  value: { icon: string; link: string };
}

export type HOME_PAGE = {
  id: number;
  meta: MetaItem;
  title: string;
  last_published_at: string;
  category_title: string;
  news_title: string;
  banners: CAROUSEL[];
};

export type HOME_PAGE_OUR_CATEGORIES = {
  id: number;
  image: string;
  is_on_homepage: boolean;
  last_published_at: string;
  meta: MetaItem;
  title: string;
};
export type HOME_PAGE_NEW = {
  content: { block_type: string; value: string }[];
  id: number;
  image: string;
  is_on_homepage: boolean;
  last_published_at: string;
  meta: MetaItem;
  title: string;
  thumbnail: string;
};
