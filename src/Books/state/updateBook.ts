import axios from 'axios';
import { API } from '../../environment';
import { Book } from '../List/interfaces/Book';

export function updateBook(book: Book) {
  return axios.post(`${API}update_book`, book);
}
