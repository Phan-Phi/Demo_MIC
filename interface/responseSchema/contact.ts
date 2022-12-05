import { MetaItem } from "./utils";

export type ITEM_SUBMIT = {
  name?: string;
};

export type ITEM_CONTACT = {
  id: number;
  last_published_at: string;
  location_on_map: string;
  meta: MetaItem;
  sub_title: string;
  title: string;
};
