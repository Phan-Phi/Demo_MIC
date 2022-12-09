import { PAGES_API, TYPE_PARAMS } from "apis";
import About, { PropsAbout } from "container/About/About";
import prefetchData from "libs/prefetchData";
import { transformUrl } from "libs/transformUrl";
import { GetServerSidePropsContext } from "next";

export default function AboutPage(props: PropsAbout) {
  return <About {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { locale } = context;
    const urls = [
      transformUrl(PAGES_API, {
        locale,
        type: TYPE_PARAMS["about.AboutPage"],
        fields: "*",
      }),
    ];

    const { resList, fallback } = await prefetchData(urls, { locale });

    return { props: { initData: resList, fallback } };
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }
}
