import React, { FormEvent, useState } from 'react';
import { Book } from '../../types';

interface IProps {
  onSubmit: (book: Book) => void;
  submitButtonText: string;
  title: string;
  currentBook?: Book;
}

export function BookForm({
  onSubmit,
  submitButtonText,
  currentBook,
  title,
}: IProps) {
  const [name, setName] = useState(currentBook?.name ?? '');
  const [description, setDescription] = useState(
    currentBook?.description ?? '',
  );
  const [progress, setProgress] = useState(currentBook?.progress ?? '');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit({
      description,
      progress,
      name,
      id: currentBook?.id,
    } as Book);
  }

  return (
    <div style={{ marginTop: 10 }}>
      <h3>{title}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" style={{ width: '100%' }}>
            Name:
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
