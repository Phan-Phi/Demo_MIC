/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "vi"],
    defaultLocale: "vi",
  },

  images: {
    domains: [process.env.BASE_URL],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mic.t-solution.vn",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "mic.t-solution.vn",
        pathname: "**",
      },
    ],
  },
  experimental: {
    modularizeImports: {
      lodash: {
        transform: "lodash/{{member}}",
      },
      "date-fns": {
        transform: "date-fns/{{member}}",
      },
    },
  },
};

module.exports = nextConfig;
