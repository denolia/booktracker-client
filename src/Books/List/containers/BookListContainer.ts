import { connect } from 'react-redux';
import { BookList } from '../BookList';
import { TDispatch, TRootState } from '../../../Core/State/store';
import { selectBooks } from '../state/selectBooks';
import { fetchBooks } from '../state/fetchBooks';

const mapStateToProps = (state: TRootState) => ({
  books: selectBooks(state),
});

const mapDispatchToProps = (dispatch: TDispatch) => ({
  getAllBooks: () => dispatch(fetchBooks()),
});

export const BookListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookList);
