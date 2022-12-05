import { MetaItem } from "./utils";
interface ITEM {
  block: string;
  value: { icon: number; link: string };
}
export type PRODUCT_LISTING_ITEMS = {
  id: number;
  last_published_at: string;
  title: string;
  meta: MetaItem;
};

export type PRODUCT_CATEGORIES_ITEMS = {
  id: number;
  last_published_at?: string;
  meta?: MetaItem;
  title: string;
  image?: string;
  is_on_homepage?: boolean;
};

export type PRODUCT_DETAIL_ITEMS = {
  description: string;
  id: number;
  last_published_at: string;
  meta: MetaItem;
  title: string;
  images: { block: string; value: string }[];
  is_on_homepage: boolean;
  specification: string;
  thumbnail: string;
  purchase_icons: ITEM;
};
