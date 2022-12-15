import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Auth/AuthContext';
import { requestUpdateBook } from './requestUpdateBook';
import { Book } from '../types';
import { requestGetAllBooks } from './fetchBooks';

interface BooksContext {
  books: Book[];
  loading: boolean;
  getAllBooks: (token: string | undefined) => void;
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

  const getAllBooks = async (token: string | undefined) => {
    const books = await requestGetAllBooks(token);
    if (books) {
      setState(({ books: _, ...rest }) => ({
        books,
        ...rest,
        loading: false,
      }));
    }
  };

  const updateBook = async (newBook: Book) => {
    const res = await requestUpdateBook(newBook);

    if (!res) {
      // todo add toast notification
      return false;
    }

    setState(({ books, ...rest }) => {
      const existingBookIndex = books.findIndex(
        (book) => book.id === newBook.id,
      );
      if (existingBookIndex >= 0) {
        const updatedBooks = [...books];
        updatedBooks[existingBookIndex] = newBook;
        return {
          books: updatedBooks,
          ...rest,
        };
      }

      return {
        books: [...books, newBook],
        ...rest,
      };
    });
    return true;
  };

  const value = { ...state, updateBook, getAllBooks };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useBooks() {
  const { user } = useAuth();
  const context = React.useContext(Context);
  if (!context) {
    throw new Error('useBooks must be used within a BooksProvider');
  }
  useEffect(() => {
    if (user?.jwt) {
      context.getAllBooks(user?.jwt);
    }
  }, [user?.jwt]);

  return context;
}
