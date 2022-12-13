import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { Routes } from './Core/Routes';
import { store } from './Core/State/store';
import { BooksProvider } from './Core/context/BookContext';

function App() {
  return (
    <Provider store={store}>
      <BooksProvider>
        <Routes />
      </BooksProvider>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
