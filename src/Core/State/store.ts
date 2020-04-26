import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { bookSlice } from '../../Books/List/state/bookSlice';

const rootReducer = combineReducers({
  books: bookSlice.reducer,
  // ... other reducers
});

export const store = configureStore({
  reducer: rootReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;

export type TDispatch = typeof store.dispatch;
