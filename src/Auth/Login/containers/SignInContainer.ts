import { connect } from 'react-redux';
import { TDispatch } from '../../../Core/State/store';
import { LoginForm } from '../LoginForm';
import { LoginMode } from '../enums/LoginMode';

const mapDispatchToProps = (dispatch: TDispatch) => ({
  onSubmit: (email: string, password: string) => {
    console.log('logging in: ', email, password);
    // signIn(email, password).then(() => {
    // dispatch(bookSlice.actions.updateBook(book));
    // if (ownProps?.setEditFinished !== undefined) {
    //   ownProps.setEditFinished();
    // }
    // });
  },
});

export const SignInContainer = connect(
  () => ({ mode: LoginMode.SIGN_IN }),
  mapDispatchToProps,
)(LoginForm);
