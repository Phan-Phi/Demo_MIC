import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { customFont } from "../libs/customFont";

const color = {
  primary: {
    primary1: "#00A859",
    primary2: "#EE393E",
    primary3: "#FCFCFD",
  },
  neutral1: "#141416",
  neutral2: "#23262F",
  neutral3: "#353945",
  neutral4: "#777E91",
  neutral5: "#B1B5C4",
  neutral6: "#E6E8EC",
  neutral7: "#F4F5F6",
  neutral8: "#FCFCFD",
};

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: color.primary.primary1,
    },
    common: {
      black: color.neutral1,
      white: color.primary.primary3,
    },
    neutral: {
      neutral1: "#141416",
      neutral2: "#23262F",
      neutral3: "#353945",
      neutral4: "#777E91",
      neutral5: "#B1B5C4",
      neutral6: "#E6E8EC",
      neutral7: "#F4F5F6",
      neutral8: "#FCFCFD",
    },
  },
  typography: {
    fontFamily: customFont.style.fontFamily,
    hero: {
      fontSize: "6rem",
      lineHeight: "6rem",
      fontWeight: 700,
    },
    h1: {
      fontSize: "4rem",
      lineHeight: "4rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "3rem",
      lineHeight: "3.5rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "2.5rem",
      lineHeight: "3rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "2rem",
      lineHeight: "2.5rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1.5rem",
      lineHeight: "2rem",
      fontWeight: 400,
    },
    body1Bold: {
      fontSize: "1.5rem",
      lineHeight: "2rem",
      fontWeight: 600,
    },
    body2: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
      fontWeight: 400,
    },
    body2Bold: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
      fontWeight: 500,
    },
    caption: {
      fontSize: "0.87rem",
      lineHeight: "1.5rem",
      fontWeight: 400,
    },
    captionBold: {
      fontSize: "0.87rem",
      lineHeight: "1.5rem",
      fontWeight: 500,
    },
    caption2: {
      fontSize: "0.75rem",
      lineHeight: "1.25rem",
      fontWeight: 400,
    },
    caption2Bold: {
      fontSize: "0.75rem",
      lineHeight: "1.25rem",
      fontWeight: 600,
    },
    hairline1: {
      fontSize: "1rem",
      lineHeight: "1rem",
      fontWeight: 700,
    },
    hairline2: {
      fontSize: "0.75rem",
      lineHeight: "0.75rem",
      fontWeight: 700,
    },
    button1: {
      fontSize: "1rem",
      lineHeight: "1rem",
      fontWeight: 800,
    },
    button2: {
      fontSize: "0.87rem",
      lineHeight: "1rem",
      fontWeight: 800,
    },
  },
});

const theme = createTheme({
  ...defaultTheme,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: defaultTheme.palette.primary.main,
          borderRadius: 90,
          padding: "1rem 1.5rem",
        },
        contained: {
          color: defaultTheme.palette.common.white,
          backgroundColor: defaultTheme.palette.primary.main,
        },
        outlined: {
          color: defaultTheme.palette.primary.main,
          borderRadius: 8,
          ":hover": {
            backgroundColor: "#ffffff",
            boxShadow: "none",
          },
          ":active": {
            boxShadow: "none",
            color: defaultTheme.palette.common.white,
            backgroundColor: defaultTheme.palette.primary.main,
          },
        },
      },
      defaultProps: {},
    },

    MuiFormControl: {
      styleOverrides: {
        root: {},
      },
    },

    MuiFormLabel: {
      styleOverrides: {
        root: {
          display: "block",
          textTransform: "uppercase",
          color: defaultTheme.palette.neutral.neutral5,
          ...defaultTheme.typography.hairline1,
          "& .MuiInputBase-input": {
            padding: "0 !important",
          },
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          marginTop: "0.75rem",
          border: `3px solid ${defaultTheme.palette.neutral.neutral6}`,
          borderRadius: "0.6rem",
          padding: "0.7rem 1rem",
          ...defaultTheme.typography.caption,
          "& ::placeholder": {
            ...defaultTheme.typography.caption,
          },
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          "& .Mui-selected": {
            ...defaultTheme.typography.button2,
            borderRadius: 90,
            color: defaultTheme.palette.common.white,
            backgroundColor: defaultTheme.palette.neutral.neutral3,
            padding: "6px 12px",
          },

          "& .MuiTabs-flexContainer": {
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
          },

          "& .MuiTabs-scroller": {
            overflow: "scroll !important",
          },

          "& .MuiButtonBase-root": {
            padding: "6px 12px",
            textTransform: "capitalize",
            minHeight: "30px",
          },
        },
        indicator: { display: "none" },
      },
      defaultProps: {},
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          marginTop: 0,
          padding: "0 1rem",
          borderRadius: "0.8rem",
          "& .MuiOutlinedInput-input": { padding: "0.6rem 0" },
          "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        },
      },
    },
  },
});

export default function ConponentThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
