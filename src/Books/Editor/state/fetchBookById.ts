import axios from 'axios';
import { API } from '../../../environment';
import { IBook } from '../../List/interfaces/IBook';

export function fetchBookById(bookId: string) {
  return axios.get(`${API}book?id=${bookId}`).then(
    (response) => ({
      name: response.data.name,
      description: response.data.description,
      progress: Number(response.data.progress),
      id: response.data.id,
    } as IBook),
  );
}
