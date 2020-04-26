import React from 'react';
import { BookFormContainer } from '../containers/BookFormContainer';

export function CreateBookPage() {
  return (
    <BookFormContainer
      submitButtonText="Create Book"
      title="Create New Book Record"
    />
  );
}
