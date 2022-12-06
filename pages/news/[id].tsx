import { PAGES_API } from "apis";
import NewsDetail, { PropsNewsDetail } from "container/News/Client/NewsDetail";
import prefetchData from "libs/prefetchData";
import { transformUrl } from "libs/transformUrl";
import { GetServerSidePropsContext } from "next";

export default function NewsSlug(props: PropsNewsDetail) {
  return <NewsDetail {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { locale, query } = context;

    const urls = [
      transformUrl(`${PAGES_API}${query.id}`, {
        locale,
        fields: "*",
      }),
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
