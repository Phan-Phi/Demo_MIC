import useSWR from "swr";
import React, { createContext, useMemo } from "react";
import { SETTING_API } from "apis";
import { SETTING_ITEM } from "interface";

type Props = {
  children: React.ReactNode;
};

export const SettingContext = createContext({} as SETTING_ITEM);

const Setting = ({ children }: Props) => {
  const { data } = useSWR(SETTING_API, {
    refreshInterval: 600 * 1000,
  });

  const memoData = useMemo(() => {
    if (data == undefined) return {} as SETTING_ITEM;

    return data;
  }, [data]);

  return (
    <SettingContext.Provider value={memoData}>
      {children}
    </SettingContext.Provider>
  );
};

export default Setting;
