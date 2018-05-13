import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {
  HOME,
  SIGNUP,
  LOGIN,
  RESTORE_PASSWORD,
  SETTINGS,
} from 'constants/routes';

import Topbar from 'containers/Topbar';
import Background from 'ui/Background';
import Grid from 'ui/Grid';

import LoginPage from './login';
import SignupPage from './signup';
import RestorePasswordPage from './restore-password';
import SettingsPage from './settings';
import DashboardPage from './dashboard';
import NotFoundPage from './404';

const IndexPage = () => (
  <Grid container direction="column" minh="100vh">
    <Topbar />
    <Background>
      <Switch>
        <Route exact path={HOME} component={DashboardPage} />
        <Route path={SIGNUP} component={SignupPage} />
        <Route path={LOGIN} component={LoginPage} />
        <Route path={RESTORE_PASSWORD} component={RestorePasswordPage} />
        <Route path={SETTINGS.INDEX} component={SettingsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Background>
  </Grid>
);

export default IndexPage;
