import axios from 'axios';
import { API } from '../../environment';
import { User } from '../types';

export async function requestLogin(email: string, password: string) {
  const response = await axios.post(`${API}login`, { email, password });
  return (await response.data.json()) as User;
}
