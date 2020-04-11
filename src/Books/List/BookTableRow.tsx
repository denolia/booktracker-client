import { Link } from 'react-router-dom';
import React from 'react';
import { IBook } from './interfaces/IBook';

interface IProps {
  book: IBook;
  key: string;
}

export const BookTableRow = ({ book }: IProps) => (
  <tr>
    <td>{book.name}</td>
    <td>{book.description}</td>
    <td>{book.progress}</td>
    <td>
      <Link to={`/edit/${book.id}`}>Edit</Link>
    </td>
  </tr>
);
