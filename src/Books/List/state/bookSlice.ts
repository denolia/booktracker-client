import { createSlice } from '@reduxjs/toolkit';
import { IBook } from '../interfaces/IBook';
import { fetchBooks } from './fetchBooks';

export const bookSlice = createSlice({
  name: 'books',
  initialState: { books: [] as IBook[], loading: true },
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (draft, { payload }) => {
      draft.books = payload;
      draft.loading = false;
    });
    builder.addCase(fetchBooks.rejected, (draft) => {
      draft.loading = false;
    });
  },
});
