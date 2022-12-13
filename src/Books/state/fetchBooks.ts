import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../environment';
import { Book } from '../List/interfaces/Book';
import axios from 'axios';

export const fetchBooks = createAsyncThunk('books/getAllBooks', async () => {
  const response = await axios.get(`${API}books`);
  return response.data as Book[];
});
