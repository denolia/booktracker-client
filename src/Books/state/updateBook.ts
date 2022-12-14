import axios from 'axios';
import { API } from '../../environment';
import type { Book } from '../types';

export function updateBook(book: Book) {
  return axios.post(`${API}update_book`, book);
}
