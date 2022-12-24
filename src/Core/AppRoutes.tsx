import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { SignInContainer } from '@app/Auth/Login/containers/SignInContainer';
import { SignUpContainer } from '@app/Auth/Login/containers/SignUpContainer';
import Logo from '../assets/logo.png';
import { CreateBookPage } from '../Books/Editor/components/CreateBookPage';
import { EditPage } from '../Books/Editor/components/EditPage';
import { BookList } from '../Books/List/components/BookList';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" target="_blank" href="/">
            <img src={Logo} width="30" height="30" alt="Logo" />
          </a>
          <Link to="/" className="navbar-brand">
            {' '}
            Book Tracker
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  Books
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Create Book
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="navbar-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="/create" element={<CreateBookPage />} />
          <Route path="/login" element={<SignInContainer />} />
          <Route path="/register" element={<SignUpContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
