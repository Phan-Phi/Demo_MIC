import localFont from "@next/font/local";

export const customFont = localFont({
  src: [
    {
      path: "../public/font/Poppins-Regular.otf",
      weight: "400",
    },
    {
      path: "../public/font/Poppins-Medium.otf",
      weight: "500",
    },
    {
      path: "../public/font/Poppins-SemiBold.otf",
      weight: "600",
    },
    {
      path: "../public/font/Poppins-Bold.otf",
      weight: "700",
    },
  ],
});

export const svnChalkboardFont = localFont({
  src: "../public/font/SVN-Chalkboard.ttf",
});

export const latoFont = localFont({
  src: "../public/font/Lato_Heavy.ttf",
});
