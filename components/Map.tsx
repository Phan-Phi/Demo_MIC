import { Box, useTheme } from "@mui/material";
import { PAGES_API, TYPE_PARAMS } from "apis";
import { useMedia } from "hook/useMedia";
import { transformUrl } from "libs/transformUrl";
import { useRouter } from "next/router";
import { useMeasure } from "react-use";
import useSWR from "swr";

export default function Map() {
  const theme = useTheme();
  const router = useRouter();
  const [ref, { width }] = useMeasure();
  const { isSmDown } = useMedia();

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
    <Box
      ref={ref}
      sx={{
        "& iframe": {
          borderWidth: 0,
          borderRadius: "1.5rem",

          [theme.breakpoints.down("sm")]: {
            margin: "1.5rem 0",
          },
        },
      }}
    >
      <iframe
        src={data.items[0].location_on_map}
        width="100%"
        height={isSmDown ? width / (340 / 250) : width / (520 / 376)}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Box>
  );
}
