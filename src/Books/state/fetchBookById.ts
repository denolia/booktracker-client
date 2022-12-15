import axios from 'axios';
import { API } from '../../environment';
import { Book } from '../types';

export function fetchBookById(bookId: string, token: string | undefined) {
  return axios
    .get(`${API}book?id=${bookId}`, {
      headers: { Authentication: `Bearer ${token}` },
    })
    .then(
      (response) =>
        ({
          ...response.data,
          progress: Number(response.data.progress),
        } as Book),
    );
}
