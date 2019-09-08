import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateBook from "./components/createbookcomponent"
import EditBook from "./components/editbookcomponent"
import BookList from "./components/bookscomponent"


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" target="_blank">
              <img src="logo.png" width="30" height="30" />
            </a>
            <Link to="/" className="navbar-brand"> Book App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Books</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Book</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Route path="/" exact component={BookList} />
          <Route path="/edit/:id" component={EditBook} />
          <Route path="/create" component={CreateBook} />
        </div>
      </Router>

    );
  }
}

export default App;