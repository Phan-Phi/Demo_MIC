import { IPage, NEW_DETAIL_ITEMS } from "interface";
import React from "react";

export type PropsNewsDetail = IPage<NEW_DETAIL_ITEMS[]>;

export default function NewsDetail(props: PropsNewsDetail) {
  return <div>NewsDetail</div>;
}
