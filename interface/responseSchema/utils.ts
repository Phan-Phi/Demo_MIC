import { ServerResponse } from "http";
import { NextIncomingMessage } from "next/dist/server/request-meta";
import { ParsedUrlQuery } from "querystring";

export interface MetaItem {
  type: string;
  detail_url: string;
  canonical_url: string;
  show_in_menus: boolean;
  url_path: string;
  slug: string;
  seo_title: string;
  search_description: string;
  first_published_at: string;
  parent: ParentItem;
  locale: string;
  og_image: string | null;
}

interface ParentItem {
  id: number;
  meta: ParentMeta;
  title: string;
}

interface ParentMeta {
  type: string;
  detail_url: string;
  html_url: string | null;
}
export interface GetServerSidePropsContext {
  req: NextIncomingMessage;
  res: ServerResponse;
  params?: ParsedUrlQuery;
  query: ParsedUrlQuery;
  preview?: boolean;
  previewData?: any;
}
