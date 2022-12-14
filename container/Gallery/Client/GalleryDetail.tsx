import { IPage } from "interface";
import { GALLERY_DETAIL_ITEMS } from "interface/responseSchema/gallery";
import React from "react";

export type PropsGalleryDetail = IPage<GALLERY_DETAIL_ITEMS[]>;

export default function GalleryDetail(props: PropsGalleryDetail) {
  return <div>GalleryDetail</div>;
}
