declare module "@mui/material/styles/createPalette" {
  interface Palette {
    neutral: {
      neutral1: string;
      neutral2: string;
      neutral3: string;
      neutral4: string;
      neutral5: string;
      neutral6: string;
      neutral7: string;
      neutral8: string;
    };
  }

  interface PaletteOptions {
    neutral?: {
      neutral1?: string;
      neutral2?: string;
      neutral3?: string;
      neutral4?: string;
      neutral5?: string;
      neutral6?: string;
      neutral7?: string;
      neutral8?: string;
    };
  }
}

declare module "@mui/material/styles/createTypography" {
  interface Typography {
    hero?: TypographyStyle;
    body1Bold?: TypographyStyle;
    body2Bold?: TypographyStyle;
    captionBold?: TypographyStyle;
    caption2?: TypographyStyle;
    caption2Bold?: TypographyStyle;
    hairline1?: TypographyStyle;
    hairline2?: TypographyStyle;
    button1?: TypographyStyle;
    button2?: TypographyStyle;
  }

  interface TypographyOptions {
    hero?: TypographyStyle;
    body1Bold?: TypographyStyle;
    body2Bold?: TypographyStyle;
    captionBold?: TypographyStyle;
    caption2?: TypographyStyle;
    caption2Bold?: TypographyStyle;
    hairline1?: TypographyStyle;
    hairline2?: TypographyStyle;
    button1?: TypographyStyle;
    button2?: TypographyStyle;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    hero: true;
    body1Bold: true;
    body2Bold: true;
    captionBold: true;
    caption2: true;
    caption2Bold: true;
    hairline1: true;
    hairline2: true;
    button1: true;
    button2: true;
  }
}
export {};
