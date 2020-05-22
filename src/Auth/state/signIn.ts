import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../interfaces/User';

interface IProps {
  email: string;
  password: string;
}

function dummyLogin(): Promise<User> {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          email: 'my@email.com',
          firstName: 'Julia',
          lastName: 'Bubnova',
        } as User),
      2000,
    ),
  );
}

export const signIn = createAsyncThunk('auth/login', async (props: IProps) => {
  // TODO use real api when back is ready
  // const response = await axios.post(`${API}login`, props);
  // return (await response.data.json()) as User;
  return await dummyLogin();
});
