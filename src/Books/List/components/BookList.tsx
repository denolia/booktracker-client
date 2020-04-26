import React, { useEffect } from 'react';
import { BookTableRow } from './BookTableRow';
import { IBook } from '../interfaces/IBook';

interface IProps {
  books: IBook[];
  getAllBooks: () => void;
}

export function BookList({ books, getAllBooks }: IProps) {
  useEffect(() => {
    getAllBooks();
  });

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
        <tbody>
          {books.map((book: IBook) => (
            <BookTableRow book={book} key={book.id as string} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
