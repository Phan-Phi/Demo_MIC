export * from "./utils";
export * from "./home";

type responseSchema<T> = {
  meta: {
    total_count: number;
    [key: string]: any;
  };
  next: string | null;
  previous: string | null;
  items: T[];
};

interface IPage<T extends unknown[]> {
  initData: T;
  fallback: {
    [key: string]: any;
  };
}

export type { responseSchema, IPage };
