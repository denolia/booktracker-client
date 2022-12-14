import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../../Auth/state/AuthSlice';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;

export type TDispatch = typeof store.dispatch;
