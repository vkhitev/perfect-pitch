import React from 'react';
import styled from 'styled-components';
import {Route, Link} from 'react-router-dom';
import Paper from 'material-ui/Paper';

import Background from 'components/Background';

import Account from 'containers/settings/Account';
import Profile from 'containers/settings/Profile';
import Password from 'containers/settings/Password';
import Notifications from 'containers/settings/Notifications';

const Settings = () => (
  <Background>
    <Paper>
      <Route path="/account" component={Account} />
      <Route path="/profile" component={Profile} />
      <Route path="/password" component={Password} />
      <Route path="/notifications" component={Notifications} />
    </Paper>
    <Paper>
      <Link to="/account">Account</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/password">Password</Link>
      <Link to="/notifications">Notifications</Link>
    </Paper>
  </Background>
);

export default Settings;
