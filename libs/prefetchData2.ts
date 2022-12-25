import axios from "../axios.config";

import { ParsedUrlQuery } from "querystring";

const prefetchData2 = async (
  originalUrlList: string[],
  options: {
    locale?: string | undefined;
    params?: ParsedUrlQuery | undefined;
    query?: ParsedUrlQuery;
  }
) => {
  const { locale } = options;

  try {
    const mergeUrlList = [...new Set([...originalUrlList])];

    const dataResList = [];

    for await (const res of mergeUrlList.map(async (el) => {
      return axios.get(el).then(({ data }) => {
        return [el, data];
      });
    })) {
      const [key, value] = res;
      // console.log("🚀 ~ file: prefetchData.ts:45 ~ forawait ~ value", value);
      // console.log("🚀 ~ file: prefetchData.ts:45 ~ forawait ~ key", key);

      // console.log("🚀 ~ file: prefetchData.ts:45 ~ forawait ~ res", res);
    }

    for await (const res of mergeUrlList.map((el) => {
      return axios
        .get(el)
        .then((data) => {
          return [el, data];
        })
        .catch((err) => {
          console.log("err", err);
        });
    })) {
    }

    return {
      resList2: [],
      fallback2: [],
    };
  } catch (err) {}
};
export default prefetchData2;
