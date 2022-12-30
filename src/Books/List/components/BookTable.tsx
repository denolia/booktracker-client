import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useBooks } from '../../state/BookContext';
import { Book } from '../../types';
import { BookTableRow } from './BookTableRow';

export function BookTable() {
  const { books } = useBooks();

  return (
    <>
      <Typography variant="h3" gutterBottom marginLeft={3}>
        My books
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="right">Progress</TableCell>
              <TableCell> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book: Book) => (
              <BookTableRow book={book} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
