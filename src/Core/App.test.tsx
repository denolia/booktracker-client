import React from 'react';
import ReactDOM from 'react-dom';
import { BooksProvider } from './context/BookContext';
import { Routes } from './Routes';
import { Provider } from 'react-redux';
import { store } from './State/store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <BooksProvider>
        <Routes />
      </BooksProvider>
    </Provider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
