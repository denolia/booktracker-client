import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router';

import { useBooks } from '../../state/BookContext';
import { Book } from '../../types';

interface Props {
  submitButtonText: string;
  title: string;
  currentBook?: Book;
}

export function BookForm({ submitButtonText, currentBook, title }: Props) {
  const navigate = useNavigate();
  const theme = useTheme();

  const { updateBook } = useBooks();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const description = data.get('description') as string | undefined;
    const author = data.get('author') as string | undefined;
    const progress = Number(
      (data.get('progress') as string | undefined) ?? '0',
    );
    const name = data.get('name') as string | undefined;

    const newBook = {
      description,
      author,
      progress,
      name,
      id: currentBook?.id,
    } as Book;
    const res = await updateBook(newBook);

    if (res) {
      navigate('/');
    }
    // todo handle error case
  }

  return (
    <>
      <Typography variant="h4" gutterBottom marginLeft={theme.spacing(3)}>
        {title}
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ m: 3 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Title"
          name="name"
          defaultValue={currentBook?.name}
          autoFocus
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="author"
          label="Author"
          id="author"
          defaultValue={currentBook?.author}
        />

        <TextField
          margin="normal"
          fullWidth
          multiline
          rows={3}
          name="description"
          label="Description"
          id="description"
          defaultValue={currentBook?.description}
        />

        <TextField
          type="number"
          inputProps={{ min: 0, max: 100 }}
          name="progress"
          label="Progress"
          id="progress"
          defaultValue={currentBook?.progress}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="success"
          sx={{ mt: 3, mb: 2 }}
        >
          {submitButtonText}
        </Button>
      </Box>
    </>
  );
}
