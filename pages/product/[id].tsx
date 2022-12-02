import { GetServerSidePropsContext } from "next";
import { PAGES_API, TYPE_PARAMS } from "../../apis";
import ProductDetail, {
  PropsProductDetail,
} from "../../container/Product/Client/ProductDetail";
import prefetchData from "../../libs/prefetchData";
import { transformUrl } from "../../libs/transformUrl";

export default function ProductSlug(props: PropsProductDetail) {
  return <ProductDetail {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { locale, query } = context;

    const urls = [transformUrl(`${PAGES_API}${query.id}`, { fields: "*" })];

    const { resList, fallback } = await prefetchData(urls, { locale });

    return {
      props: {
        initData: resList,
        fallback: fallback,
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
