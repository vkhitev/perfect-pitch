import {compose, withHandlers, withStateHandlers} from 'recompose';
import {withFirebase} from 'react-redux-firebase';

import RestorePassword from 'components/Auth/RestorePassword';
import {userIsNotAuthenticated} from 'hocs/auth';
import formState from './auth/formState';

export default compose(
  userIsNotAuthenticated,
  withStateHandlers(
    {
      email: '',
      error: null,
      messageSent: false,
    },
    {
      ...formState.handlers,
      sendMessage: () => () => ({messageSent: true}),
    },
  ),
  withFirebase,
  withHandlers({
    restore: ({firebase, email, setError, pollute, sendMessage}) => event => {
      event.preventDefault();
      pollute();
      if (email) {
        firebase
          .auth()
          .sendPasswordResetEmail(email)
          .then(() => sendMessage())
          .catch(error => {
            if (error.code === 'auth/invalid-email') {
              setError(`Email "${email}" is not valid`);
            }
            if (error.code === 'auth/user-not-found') {
              setError(`User "${email}" is not registered`);
            }
          });
      }
    },
  }),
)(RestorePassword);
