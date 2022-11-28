import React from "react";
import NewsListing, {
  NewsProps,
} from "../../container/News/Client/NewsListing";
import { GetServerSidePropsContext } from "next";
import { transformUrl } from "../../libs/transformUrl";
import { PAGES_API, TYPE_PARAMS } from "../../apis";
import prefetchData from "../../libs/prefetchData";
import { BLOG } from "../../constant";

export default function NewsPage(props: NewsProps) {
  return <NewsListing {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { locale } = context;

    const urls = [
      transformUrl(PAGES_API, {
        type: TYPE_PARAMS["news.NewsListingPage"],
        fields: "*",
        locale,
      }),
      transformUrl(PAGES_API, {
        type: TYPE_PARAMS["news.NewDetailPage"],
        limit: BLOG.BLOG_NEWS,
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
