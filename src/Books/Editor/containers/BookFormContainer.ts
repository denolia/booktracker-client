import { connect } from 'react-redux';
import { TDispatch } from '../../../Core/State/store';
import { BookForm } from '../components/BookForm';
import { IBook } from '../../List/interfaces/IBook';
import { updateBook } from '../state/updateBook';
import { bookSlice } from '../../List/state/bookSlice';

const mapDispatchToProps = (
  dispatch: TDispatch,
  ownProps: { setEditFinished?: () => void },
) => ({
  onSubmit: (book: IBook) => {
    updateBook(book); // todo handle errors
    dispatch(bookSlice.actions.updateBook(book));
    if (ownProps?.setEditFinished !== undefined) {
      ownProps.setEditFinished();
    }
  },
});

export const BookFormContainer = connect(null, mapDispatchToProps)(BookForm);
