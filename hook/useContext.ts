import { SettingContext } from "contexts/Settings";
import { useContext } from "react";

export const useSetting = () => {
  const data = useContext(SettingContext);

  return data;
};
