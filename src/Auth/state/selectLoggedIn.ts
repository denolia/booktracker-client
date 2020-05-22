import { TRootState } from '../../Core/State/store';

export const selectLoggedIn = (state: TRootState) =>
  state.auth.user?.email !== undefined;
