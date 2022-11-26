import { Box, Typography } from "@mui/material";
import Home from "../container/Home/Client/Home";
import { GetServerSidePropsContext } from "../interface/responseSchema";

export default function HomePage() {
  return <Home />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { locale } = context;

    const urls = [
      transformUrl(PAGES_API, {
        limit: BLOG.BLOG_NEWS,
        type: TYPE_PARAMS["news.NewDetailPage"],
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
