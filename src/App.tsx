import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BookList from "./Books/List/bookscomponent";
import EditBook from "./Books/Editor/editbookcomponent";
import CreateBook from "./Books/Editor/createbookcomponent";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" target="_blank" href="/">
              <img src="logo.png" width="30" height="30" alt={"Logo"} />
            </a>
            <Link to="/" className="navbar-brand">
              {" "}
              Book App
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
          <Route path="/" exact component={BookList} />
          <Route path="/edit/:id" component={EditBook} />
          <Route path="/create" component={CreateBook} />
        </div>
      </Router>
    );
  }
}

export default App;
