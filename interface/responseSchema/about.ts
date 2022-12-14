import { StringIterator } from "lodash";
import { string } from "yup";

export type ITEM_ABOUT = {
  id: string;
  meta: string;
  title: string;
  last_published_at: string;
  story_title: string;
  mission_title: string;
  value_title: string;
  story_content: { block_type: string; value: string }[];
  mission_content: { block_type: string; value: string };
  value_content: {
    block_type: string;
    value: { title: string; description: string };
  }[];
};
