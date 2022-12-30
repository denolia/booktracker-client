import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
import React from 'react';
import { Book } from '../../types';

interface Props {
  book: Book;
}

export const BookTableRow = ({ book }: Props) => (
  <TableRow
    key={book.id}
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  >
    <TableCell component="th" scope="row">
      {book.name}
    </TableCell>
    <TableCell>{book.author}</TableCell>
    <TableCell>{book.description}</TableCell>
    <TableCell align="right">{book.progress}</TableCell>
    <TableCell>
      <Link to={`/edit/${book.id}`}>Edit</Link>
    </TableCell>
  </TableRow>
);
