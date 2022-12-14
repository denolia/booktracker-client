import React, { useState } from 'react';
import { updateBook } from '../../Books/state/updateBook';
import { Book } from '../../Books/types';
import { requestGetAllBooks } from '../../Books/state/fetchBooks';

interface BooksContext {
  books: Book[];
  loading: boolean;
  getAllBooks: () => void;
  addBook: (b: Book) => Promise<boolean>;
}

const Context = React.createContext<BooksContext | undefined>(undefined);

export function BooksProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<BooksContext>({
    books: [],
    loading: true,
    getAllBooks: () => {},
    addBook: async () => true,
  });

  const addBook = async (newBook: Book) => {
    const res = await updateBook(newBook);

    if (!res) {
      // todo add toast notification
      return false;
    }
    setState(({ books, ...rest }) => ({
      books: [...books, newBook],
      ...rest,
    }));
    return true;
  };

  const getAllBooks = async () => {
    const books = await requestGetAllBooks();
    if (books) {
      setState(({ books: _, ...rest }) => ({
        books,
        ...rest,
      }));
    }
  };

  const value = { ...state, addBook, getAllBooks };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useBooks() {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error('useBooks must be used within a BooksProvider');
  }
  return context;
}
