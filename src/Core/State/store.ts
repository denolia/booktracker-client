import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { bookSlice } from '../../Books/state/bookSlice';
import { authSlice } from '../../Auth/state/AuthSlice';

const rootReducer = combineReducers({
  books: bookSlice.reducer,
  auth: authSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;

export type TDispatch = typeof store.dispatch;
