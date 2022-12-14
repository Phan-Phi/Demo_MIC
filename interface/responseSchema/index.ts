export * from "./utils";
export * from "./home";
export * from "./setting";
export * from "./gallery";
export * from "./news";
export * from "./product";

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
