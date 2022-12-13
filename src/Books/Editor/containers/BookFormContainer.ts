import { connect } from 'react-redux';
import { TDispatch } from '../../../Core/State/store';
import { BookForm } from '../components/BookForm';
import { Book } from '../../List/interfaces/Book';
import { updateBook } from '../../state/updateBook';
import { bookSlice } from '../../state/bookSlice';

const mapDispatchToProps = (
  dispatch: TDispatch,
  ownProps: { setEditFinished?: () => void },
) => ({
  onSubmit: (book: Book) => {
    updateBook(book).then(() => {
      dispatch(bookSlice.actions.updateBook(book));
      if (ownProps?.setEditFinished !== undefined) {
        ownProps.setEditFinished();
      }
    }); // todo handle errors
  },
});

export const BookFormContainer = connect(null, mapDispatchToProps)(BookForm);
