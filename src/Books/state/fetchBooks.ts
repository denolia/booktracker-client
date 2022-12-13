import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../environment';
import { Book } from '../List/interfaces/Book';

export async function requestGetAllBooks() {
  const response = await axios.get(`${API}books`);
  return response.data as Book[];
}

// deprecated
export const fetchBooks = createAsyncThunk('books/getAllBooks', async () => {
  const response = await axios.get(`${API}books`);
  return response.data as Book[];
});
