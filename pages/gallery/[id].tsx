import { PAGES_API } from "apis";
import GalleryDetail, {
  PropsGalleryDetail,
} from "container/Gallery/Client/GalleryDetail";
import prefetchData from "libs/prefetchData";
import { transformUrl } from "libs/transformUrl";
import { GetServerSidePropsContext } from "next";

export default function GallerySlug(props: PropsGalleryDetail) {
  return <GalleryDetail {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { locale, query } = context;

    const urls = [
      transformUrl(`${PAGES_API}${query.id}`, { locale, fields: "*" }),
    ];

    const { resList, fallback } = await prefetchData(urls, { locale });

    return {
      props: { initData: resList, fallback },
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
