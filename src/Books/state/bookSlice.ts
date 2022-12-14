import { createSlice } from '@reduxjs/toolkit';
import { Book } from '../types';

export const bookSlice = createSlice({
  name: 'books',
  initialState: { books: [] as Book[], loading: true },
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
});
