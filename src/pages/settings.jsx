import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import Grid from 'ui/Grid';

import Account from 'containers/Settings/Account';
import Profile from 'containers/Settings/Profile';
import Password from 'containers/Settings/Password';
import Notifications from 'containers/Settings/Notifications';
import Menu from 'containers/Settings/Menu';

import {SETTINGS} from 'constants/routes';

const PAGES = [
  {
    path: SETTINGS.ACCOUNT,
    Component: Account,
  },
  {
    path: SETTINGS.PROFILE,
    Component: Profile,
  },
  {
    path: SETTINGS.PASSWORD,
    Component: Password,
  },
  {
    path: SETTINGS.NOTIFICATIONS,
    Component: Notifications,
  },
];

const Settings = () => (
  <Grid container justify="center" spacing={40} p={5}>
    <Grid item xs={12} sm={6} lg={4}>
      <Switch>
        <Redirect exact from={SETTINGS.INDEX} to={SETTINGS.ACCOUNT} />
        {PAGES.map(item => (
          <Route key={item.path} path={item.path} component={item.Component} />
        ))}
      </Switch>
    </Grid>
    <Grid item xs={12} sm={4} lg={3}>
      <Menu />
    </Grid>
  </Grid>
);

export default Settings;
