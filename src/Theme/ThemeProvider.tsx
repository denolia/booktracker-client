import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import React, { PropsWithChildren } from 'react';

const theme = createTheme();

export function BookThemeProvider({ children }: PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
