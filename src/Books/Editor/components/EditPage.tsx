import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useAuth } from '../../../Auth/AuthContext';
import { fetchBookById } from '../../state/fetchBookById';
import { Book } from '../../types';
import { BookForm } from './BookForm';

export function EditPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState<Book>();
  const { user } = useAuth();

  useEffect(() => {
    if (id) {
      fetchBookById(id, user?.jwt).then((bookFetched) => {
        setBook(bookFetched);
        setLoading(false);
      });
    }
  }, [id]);

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
