const ROUTES = {
  product: "product",
  news: "news",
  category: "category",
  about: "about",
  gallery: "gallery",
};

export const NAVBAR_ROUTES = [
  {
    key: "home",
    name: "Trang Chủ",
    link: "/",
    child: {},
  },
  {
    key: "about",
    name: "Về Chúng Tôi",
    link: "/about",
    child: null,
  },
  {
    key: "product",
    name: "Sản Phẩm",
    link: "/product",
    child: null,
  },
  {
    key: "news",
    name: "Tin Tức",
    link: "/news",
    child: null,
  },
  {
    key: "gallery",
    name: "Thư Viện",
    link: "/gallery",
    child: null,
  },
  {
    key: "contact",
    name: "Liên Hệ",
    link: "/contact",
    child: null,
  },
];

export const FOOTER_ROUTES = [];

export default ROUTES;
