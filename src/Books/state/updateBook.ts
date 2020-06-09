import axios from 'axios';
import { API } from '../../environment';
import { IBook } from '../List/interfaces/IBook';

export function updateBook(book: IBook) {
  return axios.post(`${API}update_book`, book);
}
