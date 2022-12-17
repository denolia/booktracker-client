import { ENVIRONMENT } from '@app/environment';
import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './Auth/AuthContext';
import { BooksProvider } from './Books/state/BookContext';
import { Routes } from './Core/Routes';
import './index.css';

const rootElement = document.createElement('div');

document.body.appendChild(rootElement);

function App() {
  console.log(ENVIRONMENT);
  return (
    <AuthProvider>
      <BooksProvider>
        <Routes />
      </BooksProvider>
    </AuthProvider>
  );
}

ReactDOM.render(<App />, rootElement);
