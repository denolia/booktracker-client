import { createSlice } from '@reduxjs/toolkit';
import { IBook } from '../List/interfaces/IBook';
import { fetchBooks } from './fetchBooks';

export const bookSlice = createSlice({
  name: 'books',
  initialState: { books: [] as IBook[], loading: true },
  reducers: {
    addBook(draft, action) {
      draft.books.push(action.payload);
    },
    updateBook(draft, action) {
      const currentBook = draft.books.find(
        (book) => book.id === action.payload.id,
      );
      if (currentBook !== undefined) {
        currentBook.description = action.payload.description;
        currentBook.name = action.payload.name;
        currentBook.progress = action.payload.progress;
      }
      return draft;
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
