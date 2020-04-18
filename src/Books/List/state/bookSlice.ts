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
    updateBook(state, action) {
      const currentBook = state.books.find(
        (book) => book.id === action.payload.id,
      );
      if (currentBook !== undefined) {
        currentBook.description = action.payload.description;
        currentBook.name = action.payload.name;
        currentBook.progress = action.payload.progress;
      }
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
