import { BookThemeProvider } from '@app/Theme/ThemeProvider';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './Auth/AuthContext';
import { BooksProvider } from './Books/state/BookContext';
import { AppRoutes } from './Core/AppRoutes';
import './index.css';

const rootElement = document.createElement('div');

document.body.appendChild(rootElement);

function App() {
  return (
    <BrowserRouter>
      <BookThemeProvider>
        <AuthProvider>
          <BooksProvider>
            <AppRoutes />
          </BooksProvider>
        </AuthProvider>
      </BookThemeProvider>
    </BrowserRouter>
  );
}
const root = createRoot(rootElement);
root.render(<App />);
