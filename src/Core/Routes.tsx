import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { LoginPage } from '../Auth/Login/LoginPage';
import { CreateBookPage } from '../Books/Editor/components/CreateBookPage';
import { EditPage } from '../Books/Editor/components/EditPage';
import { BookList } from '../Books/List/components/BookList';

export function Routes() {
  return (
    <Router>
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

        <Route path="/" exact component={BookList} />
        <Route path="/edit/:id" component={EditPage} />
        <Route path="/create" component={CreateBookPage} />
        <LoginPage />
      </div>
    </Router>
  );
}
