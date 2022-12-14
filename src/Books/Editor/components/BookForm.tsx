import React, { FormEvent, useState } from 'react';
import { Redirect } from 'react-router';
import { useBooks } from '../../../Core/context/BookContext';
import { Book } from '../../types';

interface Props {
  submitButtonText: string;
  title: string;
  currentBook?: Book;
}

export function BookForm({ submitButtonText, currentBook, title }: Props) {
  const { addBook } = useBooks();
  const [name, setName] = useState(currentBook?.name ?? '');
  const [description, setDescription] = useState(
    currentBook?.description ?? '',
  );
  const [author, setAuthor] = useState(currentBook?.author ?? '');
  const [progress, setProgress] = useState(currentBook?.progress ?? '');
  const [editFinished, setEditFinished] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await addBook({
      description,
      progress,
      name,
      id: currentBook?.id,
    } as Book);

    if (res) {
      setEditFinished(true);
    }
    // todo handle error case
  }

  if (editFinished) {
    return <Redirect to="/" />;
  }

  return (
    <div style={{ marginTop: 10 }}>
      <h3>{title}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" style={{ width: '100%' }}>
            Title:
            <input
              type="text"
              className="form-control"
              value={name}
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="author" style={{ width: '100%' }}>
            Author:
            <input
              type="text"
              className="form-control"
              value={author}
              name="author"
              id="author"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="description" style={{ width: '100%' }}>
            Description:
            <input
              type="text"
              className="form-control"
              value={description}
              name="description"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="progress" style={{ width: '100%' }}>
            Progress:
            <input
              type="number"
              className="form-control"
              min="0"
              max="100"
              value={progress.toString()}
              name="progress"
              id="progress"
              onChange={(e) => setProgress(Number(e.target.value))}
            />
          </label>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value={submitButtonText}
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
