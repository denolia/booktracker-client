import * as React from 'react';
import { BookFormContainer } from '../containers/BookFormContainer';

export function CreateBook() {
  return (
    <BookFormContainer
      submitButtonText="Create Book"
      title="Create New Book Record"
    />
  );
}
