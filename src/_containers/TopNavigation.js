import {connect} from 'react-redux';
import {compose, withHandlers} from 'recompose';
import {withFirebase} from 'react-redux-firebase';

import {userOrElse} from 'hocs/auth';
import {
  NavigationAuth,
  NavigationNonAuth,
} from 'components/Layout/TopNavigation';

const connectAuth = compose(
  connect(({firebase}) => ({
    isLoaded: firebase.profile.isLoaded,
    avatarUrl: firebase.profile.avatarUrl,
    displayName: firebase.profile.displayName || firebase.profile.email,
  })),
  withFirebase,
  withHandlers({
    signOut: props => () => {
      props.firebase.logout();
    },
  }),
);

export default userOrElse(connectAuth(NavigationAuth), NavigationNonAuth);
