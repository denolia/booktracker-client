import axios from 'axios';
import { API } from '../../environment';
import { Book } from '../types';

export async function requestGetAllBooks() {
  const response = await axios.get(`${API}books`);
  return response.data as Book[];
}
