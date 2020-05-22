import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../environment';
import { IBook } from '../List/interfaces/IBook';
import axios from 'axios';

export const fetchBooks = createAsyncThunk('books/getAllBooks', async () => {
  const response = await axios.get(`${API}books`);
  return response.data as IBook[];
});
