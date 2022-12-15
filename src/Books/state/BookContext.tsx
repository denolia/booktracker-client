import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Auth/AuthContext';
import { requestUpdateBook } from './requestUpdateBook';
import { Book } from '../types';
import { requestGetAllBooks } from './fetchBooks';

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
  const { user } = useAuth();

  const getAllBooks = async () => {
    const books = await requestGetAllBooks(user?.jwt);
    if (books) {
      setState(({ books: _, ...rest }) => ({
        books,
        ...rest,
        loading: false,
      }));
    }
  };

  const updateBook = async (newBook: Book) => {
    const res = await requestUpdateBook(newBook, user?.jwt);

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
  const { isLoggedIn } = useAuth();
  const context = React.useContext(Context);
  if (!context) {
    throw new Error('useBooks must be used within a BooksProvider');
  }
  useEffect(() => {
    if (isLoggedIn) {
      context.getAllBooks();
    }
  }, [isLoggedIn]);

  return context;
}
