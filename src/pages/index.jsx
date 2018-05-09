import React from 'react';
import {Route} from 'react-router-dom';

import LoginPage from './login';
import SignupPage from './signup';
import RestorePasswordPage from './restore-password';
import NotFoundPage from './404';

const IndexPage = () => (
  <AppRoot>
    <Header />
    <Content>
      <Switch>
        <Route exact path={HOME} component={UserContent} />
        <Route path={SIGNUP} component={SignUp} />
        <Route path={LOGIN} component={LogIn} />
        <Route path={RESTORE_PASSWORD} component={RestorePassword} />
        <Route component={NotFound} />
      </Switch>
    </Content>
    <Footer />
  </AppRoot>
);
