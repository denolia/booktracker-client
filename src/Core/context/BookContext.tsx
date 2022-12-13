import React, { useState } from 'react';
import { Book } from '../../Books/List/interfaces/Book';

interface BooksContext {
  books: Book[];
  loading: boolean;
}

const Context = React.createContext<BooksContext | undefined>(undefined);

export function BooksProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<BooksContext>({
    books: [],
    loading: true,
  });

  const addBook = (newBook: Book) => {
    setState(({ books, ...rest }) => ({
      books: [...books, newBook],
      ...rest,
    }));
  };

  const value = { ...state, addBook };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useBooks() {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error('useBooks must be used within a BooksProvider');
  }
  return context;
}
