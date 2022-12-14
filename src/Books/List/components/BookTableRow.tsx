import { Link } from 'react-router-dom';
import React from 'react';
import { Book } from '../interfaces/Book';

interface IProps {
  book: Book;
  key: string;
}

export const BookTableRow = ({ book }: IProps) => (
  <tr>
    <td>{book.name}</td>
    <td>{book.author}</td>
    <td>{book.description}</td>
    <td>{book.progress}</td>
    <td>
      <Link to={`/edit/${book.id}`}>Edit</Link>
    </td>
  </tr>
);
