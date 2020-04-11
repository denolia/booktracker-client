import React, { Component } from 'react';
import axios from 'axios';
import { API } from '../../environment';
import { BookTableRow } from './BookTableRow';
import { IBook } from './interfaces/IBook';

interface IBookList {
  books: IBook[];
}

export class BookList extends Component<object, IBookList> {
  constructor(props: {}) {
    super(props);
    this.state = { books: [] };
  }

  componentDidMount() {
    axios.get(`${API}books`).then((response) => {
      this.setState({ books: response.data });
    });
  }

  bookList() {
    const { books } = this.state;
    return books.map((book: IBook) => (
      <BookTableRow book={book} key={book.id} />
    ));
  }

  render() {
    return (
      <div>
        <h3>Books List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Progress</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>{this.bookList()}</tbody>
        </table>
      </div>
    );
  }
}
