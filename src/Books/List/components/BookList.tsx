import React, { useEffect } from 'react';
import { useBooks } from '../../../Core/context/BookContext';
import { BookTableRow } from './BookTableRow';
import { Book } from '../interfaces/Book';

interface Props {
  books: Book[];
}

export function BookList({ books }: Props) {
  const { getAllBooks } = useBooks();
  useEffect(() => {
    getAllBooks?.();
  }, []);

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
          {books.map((book: Book) => (
            <BookTableRow book={book} key={book.id as string} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
