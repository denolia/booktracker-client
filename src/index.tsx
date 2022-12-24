import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './Auth/AuthContext';
import { BooksProvider } from './Books/state/BookContext';
import { AppRoutes } from './Core/AppRoutes';
import './index.css';

const rootElement = document.createElement('div');

document.body.appendChild(rootElement);

function App() {
  return (
    <AuthProvider>
      <BooksProvider>
        <AppRoutes />
      </BooksProvider>
    </AuthProvider>
  );
}

ReactDOM.render(<App />, rootElement);
