import { GetServerSidePropsContext } from "next";
import { PAGES_API, TYPE_PARAMS } from "../../apis";
import { BLOG } from "../../constant";
import ProductDetail from "../../container/Product/Client/ProductDetail";
import prefetchData from "../../libs/prefetchData";
import { transformUrl } from "../../libs/transformUrl";

export default function ProductSlug(props) {
  return <ProductDetail {...props} />;
}

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   try {
//     const { locale, query } = context;

//     const urls = [
//       transformUrl(PAGES_API, {
//         type: TYPE_PARAMS["product.ProductDetailPage"],
//         fields: "*",
//         child_of: query,
//         locale,
//       }),
//     ];
//     console.log(
//       "🚀 ~ file: [id].tsx ~ line 29 ~ getServerSideProps ~ urls",
//       urls
//     );

//     const { resList, fallback } = await prefetchData(urls, {
//       locale,
//     });

//     return {
//       props: {
//         initData: resList,
//         fallback,
//       },
//     };
//   } catch (err) {
//     return {
//       redirect: {
//         destination: "/404",
//         permanent: false,
//       },
//     };
//   }
// }
