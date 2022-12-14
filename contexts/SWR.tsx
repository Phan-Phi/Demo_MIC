import { SWRConfig } from "swr";
import axios from "../axios.config";

type SWRProps = {
  children: React.ReactNode;
  fallback?: {
    [key: string]: any;
  };
};

const SWR = ({ children, fallback }: SWRProps) => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 30000,
        revalidateIfStale: true,
        revalidateOnFocus: true,
        revalidateOnMount: true,
        revalidateOnReconnect: true,
        fetcher: async (resource: any) => {
          return axios.get(resource).then(async (res) => {
            const { data } = res;

            return data;
          });
        },
        fallback: fallback ?? {},
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SWR;
