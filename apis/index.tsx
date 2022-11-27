const PREFIX = "api/v2";

const PAGES = "pages";
const PAGE_PREVIEW = "page-preview";
const PURCHASE_CATEGORIES = "purchase-categories";

const SUBMISSIONS = "submissions";
const NEWS = "news.NewsDe tailPage";

const generatePathname = (data: string[]): string => {
  const arr = [PREFIX, ...data];
  return `/${arr.join("/")}/`;
};

export const TYPE_PARAMS = {
  "home.HomePage": "home.HomePage",
  "about.AboutPage": "about.AboutPage",
  "gallery.GalleryListingPage": "gallery.GalleryListingPage",
  "gallery.GalleryDetailPage": "gallery.GalleryDetailPage",
  "news.NewDetailPage": "news.NewsDetailPage",
  "news.NewsListingPage": "news.NewsListingPage",
  "product.ProductDetailPage": "product.ProductDetailPage",
  "product.ProductCategoryPage": "product.ProductCategoryPage",
  "product.ProductCategoryListingPage": "product.ProductCategoryListingPage",
} as const;

export const SETTING_API = `/${PREFIX}/`;

export const PAGES_API = generatePathname([PAGES]);
export const PURCHASE_CATEGORIES_API = generatePathname([PURCHASE_CATEGORIES]);
export const SUBMISSIONS_API = generatePathname([SUBMISSIONS]);
export const NEWS_API = generatePathname([NEWS]);
