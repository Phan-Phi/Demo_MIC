import { GetServerSidePropsContext } from "next";
import { transformUrl } from "libs/transformUrl";
import prefetchData from "libs/prefetchData";
import Home, { HomeProps } from "container/Home/components/Home";
import { PAGES_API, TYPE_PARAMS } from "apis";

export default function HomePage(props: HomeProps) {
  return <Home {...props} />;
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { locale } = context;

    const urls = [
      transformUrl(PAGES_API, {
        type: TYPE_PARAMS["home.HomePage"],
        fields: "*",
        locale,
      }),
      transformUrl(PAGES_API, {
        type: TYPE_PARAMS["product.ProductCategoryPage"],
        fields: "*",
        locale,
        is_on_homepage: true,
        limit: 6,
      }),
      transformUrl(PAGES_API, {
        type: TYPE_PARAMS["news.NewDetailPage"],
        fields: "*",
        locale,
        is_on_homepage: true,
        limit: 3,
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
