import React from 'react';

interface IProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description: string;
  progress: string;
  submitButtonText: string;
  title: string;
}

export function EditBookForm({
  onSubmit,
  description,
  onChange,
  name,
  progress,
  submitButtonText,
  title,
}: IProps) {
  return (
    <div style={{ marginTop: 10 }}>
      <h3 style={{ textAlign: 'center' }}>{title}</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            Name:
            <input
              type="text"
              className="form-control"
              value={name}
              name="name"
              id="name"
              onChange={onChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="description">
            Description:
            <input
              type="text"
              className="form-control"
              value={description}
              name="description"
              id="description"
              onChange={onChange}
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="progress">
            Progress:
            <input
              type="number"
              className="form-control"
              min="0"
              max="100"
              value={progress}
              name="progress"
              id="progress"
              onChange={onChange}
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
