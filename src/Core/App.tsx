import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CreateBook } from '../Books/Editor/CreateBook';
import { EditBook } from '../Books/Editor/EditBook';
import { BookListContainer } from '../Books/List/containers/BookListContainer';


export function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" target="_blank" href="/">
            <img src="logo.png" width="30" height="30" alt="Logo" />
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
          </div>
        </nav>
        <br />
        <Route path="/" exact component={BookListContainer} />
        <Route path="/edit/:id" component={EditBook} />
        <Route path="/create" component={CreateBook} />
      </div>
    </Router>
  );
}
