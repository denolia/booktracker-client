import React, { useEffect, useState } from 'react';
import { requestUpdateBook } from '../../Books/state/requestUpdateBook';
import { Book } from '../../Books/types';
import { requestGetAllBooks } from '../../Books/state/fetchBooks';

interface BooksContext {
  books: Book[];
  loading: boolean;
  getAllBooks: () => void;
  updateBook: (b: Book) => Promise<boolean>;
}

const Context = React.createContext<BooksContext | undefined>(undefined);

export function BooksProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<BooksContext>({
    books: [],
    loading: true,
    getAllBooks: () => {},
    updateBook: async () => true,
  });

  const getAllBooks = async () => {
    const books = await requestGetAllBooks();
    if (books) {
      setState(({ books: _, ...rest }) => ({
        books,
        ...rest,
        loading: false,
      }));
    }
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  const updateBook = async (newBook: Book) => {
    const res = await requestUpdateBook(newBook);

    if (!res) {
      // todo add toast notification
      return false;
    }

    setState(({ books, ...rest }) => {
      const otherBooks = books.filter((book) => book.id !== newBook.id);
      return {
        books: [...otherBooks, newBook],
        ...rest,
      };
    });
    return true;
  };

  const value = { ...state, updateBook, getAllBooks };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useBooks() {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error('useBooks must be used within a BooksProvider');
  }
  return context;
}
