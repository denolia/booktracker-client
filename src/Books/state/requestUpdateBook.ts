import axios from 'axios';
import { API } from '../../environment';
import type { Book } from '../types';

export async function requestUpdateBook(book: Book) {
  let res = null;
  try {
    res = await axios.post(`${API}update_book`, book);
  } catch (e) {
    console.error(e);
  }
  return res;
}
