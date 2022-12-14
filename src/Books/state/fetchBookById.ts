import axios from 'axios';
import { API } from '../../environment';
import { Book } from '../types';

export function fetchBookById(bookId: string) {
  return axios.get(`${API}book?id=${bookId}`).then(
    (response) =>
      ({
        ...response.data,
        progress: Number(response.data.progress),
      } as Book),
  );
}
