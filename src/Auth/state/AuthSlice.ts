import { createSlice } from '@reduxjs/toolkit';
import { signIn } from './signIn';
import { User } from '../interfaces/User';

interface AuthState {
  user?: User;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {} as AuthState,
  reducers: {
    logout(draft, action) {
      draft.user = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (draft, { payload }) => {
      draft.user = payload;
    });
  },
});
