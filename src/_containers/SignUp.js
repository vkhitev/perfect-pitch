import {compose, withHandlers, withStateHandlers} from 'recompose';
import {withFirebase} from 'react-redux-firebase';

import SignUpForm from 'components/Auth/SignUpForm';
import {userIsNotAuthenticated} from 'hocs/auth';
import logInWithGoogle from './auth/google';
import formState from './auth/formState';

export default compose(
  userIsNotAuthenticated,
  withStateHandlers(formState.state, formState.handlers),
  withFirebase,
  withHandlers({
    signUp: ({email, password, pollute, setError, firebase}) => event => {
      event.preventDefault();
      pollute();
      if (email && password) {
        firebase
          .createUser({
            email,
            password,
          })
          .catch(error => {
            if (error.code === 'auth/invalid-email') {
              setError(`Email "${email}" is not valid`);
            }
            if (error.code === 'auth/email-already-in-use') {
              setError(`Email "${email}" is already in use`);
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
)(SignUpForm);
