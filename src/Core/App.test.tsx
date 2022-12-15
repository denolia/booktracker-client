import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AuthProvider } from '../Auth/AuthContext';
import { BooksProvider } from './context/BookContext';
import { Routes } from './Routes';
import { store } from './State/store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <AuthProvider>
        <BooksProvider>
          <Routes />
        </BooksProvider>
      </AuthProvider>
    </Provider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
