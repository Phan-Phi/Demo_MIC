import React, { createContext } from "react";
import useSWR from "swr";

const SettingContext = createContext({});

export default function Settings({ children }: { children: React.ReactNode }) {
  const { data } = useSWR();

  return (
    <SettingContext.Provider value={"sdas"}>{children}</SettingContext.Provider>
  );
}
