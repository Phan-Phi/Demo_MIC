import { PAGES_API, TYPE_PARAMS } from "apis";
import { transformUrl } from "libs/transformUrl";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function Map() {
  const router = useRouter();

  const { data } = useSWR(
    transformUrl(PAGES_API, {
      locale: router.locale,
      type: TYPE_PARAMS["contact.ContactPage"],
      fields: "*",
    })
  );

  if (data == undefined) {
    return null;
  }

  return (
    <iframe
      src={data.items[0].location_on_map}
      width="100%"
      height="375px"
      allowFullScreen
      loading="lazy"
      style={{
        borderWidth: 0,
      }}
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
