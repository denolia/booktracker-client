import { connect } from 'react-redux';
import { TDispatch, TRootState } from '../../../Core/State/store';
import { LoginForm } from '../LoginForm';
import { LoginMode } from '../enums/LoginMode';
import { signIn } from '../../state/signIn';
import { selectLoggedIn } from '../../state/selectLoggedIn';

const mapStateToProps = (state: TRootState) => ({
  mode: LoginMode.SIGN_IN,
  loggedIn: selectLoggedIn(state),
});

const mapDispatchToProps = (dispatch: TDispatch) => ({
  onSubmit: (email: string, password: string) => {
    dispatch(signIn({ email, password }));
  },
});

export const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
