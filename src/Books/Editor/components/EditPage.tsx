import React, { useEffect, useState } from 'react';
import { Redirect, RouteComponentProps } from 'react-router';
import { fetchBookById } from '../state/fetchBookById';
import { IBook } from '../../List/interfaces/IBook';
import { BookFormContainer } from '../containers/BookFormContainer';

// this is what we expect coming from '/edit/:id' to 'props.match.params.*'
type PathParamsType = {
  id: string;
};

export function EditPage({ match }: RouteComponentProps<PathParamsType>) {
  const [loading, setLoading] = useState(true);
  const [editFinished, setEditFinished] = useState(false);
  const [book, setBook] = useState<IBook>();

  useEffect(() => {
    fetchBookById(match.params.id).then((book) => {
      setBook(book);
      setLoading(false);
    });
  }, [match.params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (editFinished) {
    return <Redirect to="/" />;
  }

  if (book === undefined) {
    return <div>Unable to fetch the book</div>;
  }

  return (
    <BookFormContainer
      setEditFinished={() => setEditFinished(true)}
      currentBook={book}
      submitButtonText="Update Book"
      title="Edit Book"
    />
  );
}
