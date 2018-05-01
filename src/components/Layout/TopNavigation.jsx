import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';

import DefaultUser from 'assets/DefaultUser.png';
import {SETTINGS, SIGNUP, LOGIN} from 'constants/routes';

export const NavigationAuth = ({isLoaded, avatarUrl, displayName, signOut}) => (
  <React.Fragment>
    {isLoaded && <Avatar src={avatarUrl} alt="" />}
    {isLoaded && (
      <Typography
        variant="subheading"
        color="inherit"
        style={{paddingRight: 16, paddingLeft: 16}}
      >
        {displayName}
      </Typography>
    )}
    <Button color="inherit" component={Link} to={SETTINGS.INDEX}>
      Settings
    </Button>
    <Button color="inherit" onClick={signOut}>
      Sign Out
    </Button>
  </React.Fragment>
);

NavigationAuth.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired,
  displayName: PropTypes.string,
  avatarUrl: PropTypes.string,
};

NavigationAuth.defaultProps = {
  displayName: 'User',
  avatarUrl: DefaultUser,
};

export const NavigationNonAuth = () => (
  <React.Fragment>
    <Button color="inherit" component={Link} to={SIGNUP}>
      Sign Up
    </Button>
    <Button color="inherit" component={Link} to={LOGIN}>
      Log In
    </Button>
  </React.Fragment>
);
