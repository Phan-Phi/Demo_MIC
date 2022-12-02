import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import queryString from "query-string";
import { OutlinedInput } from "@mui/material";
import { PAGES_API, SETTING_API, TYPE_PARAMS } from "../../apis";
import { ParsedUrlQuery } from "querystring";
import { transformUrl } from "../../libs/transformUrl";
import axios from "../../axios.config";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // const urldemo = "gallery.GalleryDetailPage";
  // const objectParams = {
  //   locale: "en",
  //   limit: 6,
  //   fields: "*",
  //   type: "gallery.GalleryDetailPage",
  // };

  // const transformUrl = (urldemo, objectParams) => {
  //   if (urldemo == undefined) {
  //     return "";
  //   }

  //   const { url, query } = queryString.parseUrl(
  //     "https://mic.t-solution.vn/api/v2/pages/?fields=%2A&locale=vi&offset=9&limit=9&type=news.NewsDetailPage"
  //   );

  //   const mergeUrl = { ...query, ...objectParams };

  //   const stringUrl = `${url}?${queryString.stringify(mergeUrl)}`;
  //   console.log(
  //     "🚀 ~ file: index.tsx:70 ~ transformUrl ~ stringUrl",
  //     stringUrl
  //   );
  //   return stringUrl;
  // };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Box>{err}</Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab disableRipple label="Item One" {...a11yProps(0)} />
          <Tab disableRipple label="Item Two" {...a11yProps(1)} />
          <Tab disableRipple label="Item Three" {...a11yProps(2)} />
          <Tab disableRipple label="Item Four" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>

      <OutlinedInput placeholder="Please enter text" />
      <Typography>demo transformUrl</Typography>
      {/* <Typography> {transformUrl(PAGES_API, objectParams)}l</Typography> */}
      {/* {transformUrl(PAGES_API, objectParams)} */}
    </Box>
  );
}
