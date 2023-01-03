import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useNavigate } from 'react-router';
import { useBooks } from '../../state/BookContext';
import { Book } from '../../types';
import { BookTableRow } from './BookTableRow';

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
};

export function BookTable() {
  const { books } = useBooks();
  const theme = useTheme();
  const navigate = useNavigate();

  const onAddBook = () => {
    navigate('/create');
  };

  return (
    <>
      <Typography variant="h4" gutterBottom marginLeft={theme.spacing(3)}>
        My books
      </Typography>
      <Box sx={{ m: 3 }}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
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
                <BookTableRow book={book} key={book.id} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Fab color="success" aria-label="add" sx={fabStyle}>
        <AddIcon onClick={onAddBook} />
      </Fab>
    </>
  );
}
