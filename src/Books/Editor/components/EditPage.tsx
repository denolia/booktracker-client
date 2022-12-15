import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { useAuth } from '../../../Auth/AuthContext';
import { fetchBookById } from '../../state/fetchBookById';
import { Book } from '../../types';
import { BookForm } from './BookForm';

// this is what we expect coming from '/edit/:id' to 'props.match.params.*'
type PathParamsType = {
  id: string;
};

export function EditPage({ match }: RouteComponentProps<PathParamsType>) {
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState<Book>();
  const { user } = useAuth();

  useEffect(() => {
    fetchBookById(match.params.id, user?.jwt).then((bookFetched) => {
      setBook(bookFetched);
      setLoading(false);
    });
  }, [match.params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!book) {
    // todo notification
    return <div>Unable to fetch the book</div>;
  }

  return (
    <BookForm
      currentBook={book}
      submitButtonText="Update Book"
      title="Edit Book"
    />
  );
}
