import React from 'react';
import { BookForm } from './BookForm';

export function CreateBookPage() {
  return (
    <BookForm submitButtonText="Create Book" title="Create New Book Record" />
  );
}
