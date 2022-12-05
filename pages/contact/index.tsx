import { PAGES_API, TYPE_PARAMS } from "apis";
import Contact, { ContactProps } from "container/Contact/Client/Contact";
import prefetchData from "libs/prefetchData";
import { transformUrl } from "libs/transformUrl";
import { GetServerSidePropsContext } from "next";

export default function ContactPage(props: ContactProps) {
  return <Contact {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { locale } = context;

    const urls = [
      transformUrl(PAGES_API, {
        locale,
        type: TYPE_PARAMS["contact.ContactPage"],
        fields: "*",
      }),
    ];

    const { resList, fallback } = await prefetchData(urls, { locale });

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
