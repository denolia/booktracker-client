import * as React from 'react';
import { EditBookFormContainer } from '../containers/EditBookFormContainer';

export function CreateBook() {
  return (
    <EditBookFormContainer
      currentName=""
      currentDescription=""
      currentProgress={0}
      submitButtonText="Create Book"
      title="Create New Book Record"
    />
  );
}
