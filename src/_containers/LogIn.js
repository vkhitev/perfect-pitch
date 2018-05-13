import {compose, withHandlers, withStateHandlers} from 'recompose';
import {withFirebase} from 'react-redux-firebase';

import LogInForm from 'components/Auth/LogInForm';
import {userIsNotAuthenticated} from 'hocs/auth';
import formState from './auth/formState';
import logInWithGoogle from './auth/google';

export default compose(
  userIsNotAuthenticated,
  withStateHandlers(formState.state, formState.handlers),
  withFirebase,
  withHandlers({
    logIn: ({email, password, pollute, setError, firebase}) => event => {
      event.preventDefault();
      pollute();
      if (email && password) {
        firebase
          .login({
            email,
            password,
          })
          .catch(error => {
            if (error.code === 'auth/invalid-email') {
              setError(`Email "${email}" is not valid`);
            }
            if (error.code === 'auth/user-not-found') {
              setError(`User "${email}" is not registered`);
            }
            if (error.code === 'auth/wrong-password') {
              setError('The password is wrong');
            }
          });
      }
    },
    logInWithGoogle: ({email, password, setError, firebase}) => () => {
      logInWithGoogle({
        email,
        password,
        setError,
        firebase,
      });
    },
  }),
)(LogInForm);
