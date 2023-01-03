import { green, purple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';
import React, { PropsWithChildren } from 'react';

const appTheme = createTheme({
  palette: {
    primary: {
      main: green[800],
      light: green[500],
      dark: green[900],
      contrastText: '#fff',
    },
  },
  // override default theme for buttons
  components: {
    MuiButtonBase: {
      styleOverrides: {
        // todo doesn't work :(
        root: ({ ownerState, theme }) => ({
          backgroundColor: green[500],
          color: purple[500],
          border: `1px solid ${green[500]}`,
        }),
      },
    },
  },
});

export function BookThemeProvider({ children }: PropsWithChildren) {
  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>;
}
