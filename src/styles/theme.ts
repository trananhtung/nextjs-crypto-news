import { createTheme } from '@mui/material/styles';
import { TypographyStyleOptions } from '@mui/material/styles/createTypography';
declare module '@mui/material/styles' {
  interface Theme {
    normalText?: {
      fs1?: TypographyStyleOptions | undefined;
      fs2?: TypographyStyleOptions | undefined;
      fs3?: TypographyStyleOptions | undefined;
      fs4?: TypographyStyleOptions | undefined;
      fs5?: TypographyStyleOptions | undefined;
      fs6?: TypographyStyleOptions | undefined;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    normalText?: {
      fs1?: TypographyStyleOptions | undefined;
      fs2?: TypographyStyleOptions | undefined;
      fs3?: TypographyStyleOptions | undefined;
      fs4?: TypographyStyleOptions | undefined;
      fs5?: TypographyStyleOptions | undefined;
      fs6?: TypographyStyleOptions | undefined;
    };
  }
}

const themeDesktop = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    htmlFontSize: 16,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: '3rem',
      fontWeight: 600,
      lineHeight: 1.167,
      letterSpacing: '-0.0125em',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.167,
      letterSpacing: '-0.0125em',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.167,
      letterSpacing: '-0.0125em',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.167,
      letterSpacing: '-0.0125em',
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.167,
      letterSpacing: '-0.0125em',
    },
    h6: {
      fontSize: '0.75rem',
      fontWeight: 600,
      lineHeight: 1.167,
      letterSpacing: '-0.0125em',
    },
  },
  normalText: {
    fs1: {
      fontSize: '2.75rem',
      fontWeight: 400,
      lineHeight: 1.167,
    },
    fs2: {
      fontSize: '2.25rem',
      fontWeight: 400,
      lineHeight: 1.167,
    },
    fs3: {
      fontSize: '1.75rem',
      fontWeight: 400,
      lineHeight: 1.167,
    },
    fs4: {
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: 1.167,
    },
    fs5: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.167,
    },
    fs6: {
      fontSize: '05.rem',
      fontWeight: 400,
      lineHeight: 1.167,
    },
  },
  palette: {
    background: {
      default: 'red',
    },
  },
});

const themeMobile = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    htmlFontSize: 16,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: '2.25rem',
      fontWeight: 600,
      lineHeight: 1.167,
      letterSpacing: '-0.0125em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.167,
      letterSpacing: '-0.0125em',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.167,
      letterSpacing: '-0.0125em',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.167,
      letterSpacing: '-0.0125em',
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.167,
      letterSpacing: '-0.0125em',
    },
    h6: {
      fontSize: '0.75rem',
      fontWeight: 600,
      lineHeight: 1.167,
      letterSpacing: '-0.0125em',
    },
  },
  normalText: {
    fs1: {
      fontSize: '2rem',
      fontWeight: 400,
      lineHeight: 1.167,
    },
    fs2: {
      fontSize: '1.75rem',
      fontWeight: 400,
      lineHeight: 1.167,
    },
    fs3: {
      fontSize: '1.5rem',
      fontWeight: 400,
      lineHeight: 1.167,
    },
    fs4: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.167,
    },
    fs5: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.167,
    },
    fs6: {
      fontSize: '05.rem',
      fontWeight: 400,
      lineHeight: 1.167,
    },
  },
});

export { themeDesktop, themeMobile };
