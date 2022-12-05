import queryString from "query-string";
import { usePrevious } from "react-use";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

import pick from "lodash/pick";
import omit from "lodash/omit";
import isEqual from "lodash/isEqual";
import { transformUrl } from "libs/transformUrl";

interface Props {
  initState?: {
    [key: string]: any;
  };
  callback?: (params: object) => void;
  excludeKeys?: string[];
  isUpdateRouter?: boolean;
  isShallow?: boolean;
  isScroll?: boolean;
}

export const useParams = (props: Props = {}) => {
  const {
    initState = {},
    callback = () => {
      //
    },
    excludeKeys = [],
    isScroll = false,
    isShallow = true,
    isUpdateRouter = true,
  } = props;

  const router = useRouter();
  const [isReady, setIsReady] = useState(false);
  const [params, setParams] = useState(initState);
  const prevParams = usePrevious(params);

  useEffect(() => {
    setParams((prev) => {
      const originalObj = { ...prev, ...router.query };

      const newObj: Record<string, any> = {};

      for (const key of Object.keys(originalObj)) {
        if (!!originalObj[key]) {
          newObj[key] = originalObj[key];
        }
      }

      return newObj;
    });
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (isEqual(prevParams, params)) {
      return;
    }

    const urlParams = omit(params, [...excludeKeys]);

    const { url } = queryString.parseUrl(router.asPath);

    const pathname = transformUrl(url, urlParams);

    callback(params);

    if (isUpdateRouter) {
      router.push(pathname, pathname, {
        shallow: isShallow,
        scroll: isScroll,
      });
    }
  }, [params, prevParams]);

  const paramsHandler = useCallback((newParams: object) => {
    setParams((prev) => {
      return {
        ...prev,
        ...newParams,
      };
    });
  }, []);

  const resetParams = useCallback(() => {
    const whiteList = ["limit", "use_cache", "offset"];

    const defaultParams = {
      limit: 10,
      offset: 0,
      with_count: true,
    };

    setParams({ ...defaultParams, ...pick(params, whiteList) });
  }, [params]);

  return [params, paramsHandler, isReady, resetParams] as [
    params: typeof params,
    paramsHandler: typeof paramsHandler,
    isReady: typeof isReady,
    resetParams: typeof resetParams
  ];
};
