import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from '../Auth/AuthContext';
import { BooksProvider } from '../Books/state/BookContext';
import { Routes } from './Routes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AuthProvider>
      <BooksProvider>
        <Routes />
      </BooksProvider>
    </AuthProvider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
