import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import React, { PropsWithChildren } from 'react';
import { green } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: green[800],
      light: green[500],
      dark: green[900],
      contrastText: '#fff',
    },
  },
});

export function BookThemeProvider({ children }: PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
