import React from 'react';
import styled from 'styled-components';
import Grid from 'material-ui/Grid';
import {Route, Switch} from 'react-router-dom';

import Header from 'components/Layout/TopBar';
import Footer from 'components/Layout/Footer';
import NotFound from 'components/NotFound';
import Dashboard from 'components/Dashboard';
import Landing from 'components/Landing';
import Skill from 'components/Skill';
import Exercise from 'components/Exercise';

import SignUp from 'containers/SignUp';
import LogIn from 'containers/LogIn';
import RestorePassword from 'containers/RestorePassword';
import {userOrElse} from 'hocs/auth';

import {HOME, SIGNUP, LOGIN, RESTORE_PASSWORD} from 'constants/routes';

const AppRoot = styled(Grid).attrs({
  container: true,
  direction: 'column',
})`
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  background-color: #e9e9e9;
  position: relative;
`;

const UserContent = userOrElse(Dashboard, Landing);

const App = () => (
  <AppRoot>
    <Header />
    <Content>
      <Switch>
        <Route exact path={HOME} component={UserContent} />
        <Route path={SIGNUP} component={SignUp} />
        <Route path={LOGIN} component={LogIn} />
        <Route path={RESTORE_PASSWORD} component={RestorePassword} />
        <Route exact path="/skill/:category" component={Skill} />
        <Route exact path="/skill/:category/:exercise" component={Exercise} />
        <Route component={NotFound} />
      </Switch>
    </Content>
    {/* <Footer /> */}
  </AppRoot>
);

export default App;
