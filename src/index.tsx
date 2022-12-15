import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { AuthProvider } from './Auth/AuthContext';
import { Routes } from './Core/Routes';
import { store } from './Core/State/store';
import { BooksProvider } from './Core/context/BookContext';

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <BooksProvider>
          <Routes />
        </BooksProvider>
      </AuthProvider>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
