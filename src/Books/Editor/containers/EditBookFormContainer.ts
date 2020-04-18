import { connect } from 'react-redux';
import { TDispatch } from '../../../Core/State/store';
import { EditBookForm } from '../components/EditBookForm';
import { IBook } from '../../List/interfaces/IBook';
import { updateBook } from '../state/updateBook';
import { bookSlice } from '../../List/state/bookSlice';

const mapDispatchToProps = (dispatch: TDispatch) => ({
  onSubmit: (book: IBook) => {
    updateBook(book); // todo handle errors
    dispatch(bookSlice.actions.updateBook(book));
    // todo redirect to the index page for edit and clean state for create
  },
});

export const EditBookFormContainer = connect(
  null,
  mapDispatchToProps,
)(EditBookForm);
