import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import "@fontsource/barlow-condensed/400.css";
import "@fontsource/barlow-condensed/500.css";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import { colors, fonts, layout } from "./tokens";

declare module "@mui/material/styles" {
  interface Palette {
    surface: {
      page: string;
      section: string;
      elevated: string;
      card: string;
    };
  }
  interface PaletteOptions {
    surface?: {
      page: string;
      section: string;
      elevated: string;
      card: string;
    };
  }
}

const baseTheme = createTheme({
  spacing: 4,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1536,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: colors.accent.main,
      light: colors.accent.hover,
      dark: "#1A6FE0",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: colors.text.secondary,
    },
    background: {
      default: colors.bg.page,
      paper: colors.bg.card,
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
    divider: colors.border.subtle,
    error: { main: colors.error },
    success: { main: colors.success },
    surface: {
      page: colors.bg.page,
      section: colors.bg.section,
      elevated: colors.bg.elevated,
      card: colors.bg.card,
    },
  },
  typography: {
    fontFamily: fonts.body,
    h1: {
      fontFamily: fonts.display,
      fontWeight: 700,
      letterSpacing: "-0.02em",
      lineHeight: 0.95,
      fontSize: "clamp(2.75rem, 6vw, 5.5rem)",
      textTransform: "uppercase",
    },
    h2: {
      fontFamily: fonts.display,
      fontWeight: 600,
      letterSpacing: "-0.01em",
      lineHeight: 1,
      fontSize: "clamp(2rem, 4vw, 3.5rem)",
      textTransform: "uppercase",
    },
    h3: {
      fontFamily: fonts.display,
      fontWeight: 600,
      letterSpacing: "0.02em",
      lineHeight: 1.1,
      fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
      textTransform: "uppercase",
    },
    h4: {
      fontFamily: fonts.display,
      fontWeight: 600,
      fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
    },
    h5: {
      fontFamily: fonts.display,
      fontWeight: 500,
      fontSize: "1.125rem",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
    },
    h6: {
      fontFamily: fonts.mono,
      fontWeight: 500,
      fontSize: "0.75rem",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
    },
    body1: {
      fontFamily: fonts.body,
      fontSize: "1rem",
      lineHeight: 1.7,
      color: colors.text.secondary,
    },
    body2: {
      fontFamily: fonts.body,
      fontSize: "0.875rem",
      lineHeight: 1.6,
      color: colors.text.secondary,
    },
    button: {
      fontFamily: fonts.display,
      fontWeight: 600,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          backgroundColor: colors.bg.page,
          color: colors.text.primary,
          minHeight: "100vh",
        },
        "::selection": {
          backgroundColor: colors.accent.muted,
          color: colors.text.primary,
        },
        a: {
          color: "inherit",
          textDecoration: "none",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 2,
          padding: "12px 28px",
          fontSize: "0.8125rem",
          transition: "all 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
        },
        containedPrimary: {
          backgroundColor: colors.accent.main,
          "&:hover": {
            backgroundColor: colors.accent.hover,
          },
        },
        outlinedPrimary: {
          borderColor: colors.border.medium,
          color: colors.text.primary,
          "&:hover": {
            borderColor: colors.accent.main,
            backgroundColor: colors.accent.muted,
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            color: colors.text.secondary,
            fontFamily: fonts.mono,
            fontSize: "0.75rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: colors.accent.main,
          },
          "& .MuiOutlinedInput-root": {
            backgroundColor: colors.bg.elevated,
            "& fieldset": {
              borderColor: colors.border.medium,
            },
            "&:hover fieldset": {
              borderColor: colors.border.medium,
            },
            "&.Mui-focused fieldset": {
              borderColor: colors.accent.main,
            },
          },
          "& .MuiOutlinedInput-input": {
            color: colors.text.primary,
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: colors.bg.card,
          backgroundImage: "none",
          border: `1px solid ${colors.border.subtle}`,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: colors.bg.card,
          backgroundImage: "none",
          border: `1px solid ${colors.border.subtle}`,
          borderRadius: 4,
        },
      },
    },
  },
});

export const theme = responsiveFontSizes(baseTheme);
export { colors, fonts, layout };
