import { PAGES_API, TYPE_PARAMS } from "apis";
import { BLOG } from "constant";
import GalleryListing, {
  GalleryProps,
} from "container/Gallery/Client/GalleryListing";
import { transformUrl } from "libs/transformUrl";
import { GetServerSidePropsContext } from "next";

import prefetchData from "../../libs/prefetchData";
import prefetchData2 from "../../libs/prefetchData2";

export default function GalleryPage(props: GalleryProps) {
  return <GalleryListing {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { locale } = context;

    const urls = [
      transformUrl(PAGES_API, {
        type: TYPE_PARAMS["gallery.GalleryListingPage"],
        fields: "*",
        locale,
      }),
      transformUrl(PAGES_API, {
        type: TYPE_PARAMS["gallery.GalleryDetailPage"],
        limit: BLOG.BLOG_GALLERY,
        fields: "*",
        locale,
      }),
    ];

    // const { resList, fallback } = await prefetchData(urls, {
    //   locale,
    // });

    const { resList2, fallback2 } = await prefetchData2(urls, {
      locale,
    });
    // console.log(
    //   "🚀 ~ file: index.tsx:40 ~ getServerSideProps ~ resList2",
    //   resList2
    // );

    return {
      props: {
        initData: resList2,
        fallback: fallback2,
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}
