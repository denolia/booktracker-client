import { TRootState } from '../../../Core/State/store';

export const selectBooks = (state: TRootState) => state.books.books;
