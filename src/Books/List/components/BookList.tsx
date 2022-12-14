import React, { useEffect } from 'react';
import { useBooks } from '../../../Core/context/BookContext';
import { BookTableRow } from './BookTableRow';
import { Book } from '../../types';

export function BookList() {
  const { books, getAllBooks } = useBooks();
  useEffect(() => {
    getAllBooks?.();
  }, []);

  return (
    <div>
      <h3>Books List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
            <th>Progress</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book: Book) => (
            <BookTableRow book={book} key={book.id as string} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
