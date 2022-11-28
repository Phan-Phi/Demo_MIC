import { GetServerSidePropsContext } from "next";
import { PAGES_API, TYPE_PARAMS } from "../../apis";
import { BLOG } from "../../constant";
import GalleryListing, {
  GalleryProps,
} from "../../container/Gallery/Client/GalleryListing";
import prefetchData from "../../libs/prefetchData";
import { transformUrl } from "../../libs/transformUrl";

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

    const { resList, fallback } = await prefetchData(urls, {
      locale,
    });

    return {
      props: {
        initData: resList,
        fallback,
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
