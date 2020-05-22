import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../environment';
import { IBook } from '../List/interfaces/IBook';

export const fetchBooks = createAsyncThunk('books/getAllBooks', async () => {
  const response = await fetch(`${API}books`);
  return (await response.json()) as IBook[];
});
