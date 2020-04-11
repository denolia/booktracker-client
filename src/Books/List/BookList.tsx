import React, { Component } from 'react';
import { BookTableRow } from './BookTableRow';
import { IBook } from './interfaces/IBook';

interface IProps {
  books: IBook[];
  getAllBooks: () => void;
}

export class BookList extends Component<IProps> {
  componentDidMount() {
    const { getAllBooks } = this.props;
    getAllBooks();
  }

  bookList() {
    const { books } = this.props;
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
