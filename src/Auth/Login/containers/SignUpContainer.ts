import { connect } from 'react-redux';
import { TDispatch } from '../../../Core/State/store';
import { LoginForm } from '../LoginForm';
import { LoginMode } from '../enums/LoginMode';

const mapDispatchToProps = (dispatch: TDispatch) => ({
  onSubmit: (email: string, password: string) => {
    console.log('register: ', email, password);
    // signUp(email, password).then(() => {
    // dispatch(bookSlice.actions.updateBook(book));
    // if (ownProps?.setEditFinished !== undefined) {
    //   ownProps.setEditFinished();
    // }
    // });
  },
});

export const SignUpContainer = connect(
  () => ({ mode: LoginMode.SIGN_UP }),
  mapDispatchToProps,
)(LoginForm);
