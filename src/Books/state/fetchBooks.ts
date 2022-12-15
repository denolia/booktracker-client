import axios from 'axios';
import { API } from '../../environment';
import { Book } from '../types';

export async function requestGetAllBooks(token: string | undefined) {
  const response = await axios.get(`${API}books`, {
    headers: { Authentication: `Bearer ${token}` },
  });
  return response.data as Book[];
}
