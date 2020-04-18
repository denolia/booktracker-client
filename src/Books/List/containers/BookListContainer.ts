import { connect } from 'react-redux';
import { TDispatch, TRootState } from '../../../Core/State/store';
import { selectBooks } from '../state/selectBooks';
import { fetchBooks } from '../state/fetchBooks';
import { BookList } from '../components/BookList';

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
