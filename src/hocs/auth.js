import {connectedReduxRedirect} from 'redux-auth-wrapper/history4/redirect';
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper';
import {routerActions} from 'react-router-redux';
import {connect} from 'react-redux';
import {branch, renderNothing, compose} from 'recompose';

import {HOME, LOGIN} from 'constants/routes';

const authenticatingSelector = ({firebase: {auth, isInitializing}}) =>
  !auth.isLoaded || isInitializing === true;

const authenticatedSelector = ({firebase: {auth}}) =>
  auth.isLoaded && !auth.isEmpty;

const nonAuthenticatedSelector = ({firebase: {auth}}) =>
  auth.isLoaded && auth.isEmpty;

export const userIsAuthenticated = connectedReduxRedirect({
  redirectPath: LOGIN,
  allowRedirectBack: true,
  wrapperDisplayName: 'UserIsAuthenticated',
  redirectAction: routerActions.replace,
  authenticatingSelector,
  authenticatedSelector,
});

export const userIsNotAuthenticated = connectedReduxRedirect({
  redirectPath: HOME,
  allowRedirectBack: false,
  wrapperDisplayName: 'UserIsNotAuthenticated',
  redirectAction: routerActions.replace,
  authenticatingSelector,
  authenticatedSelector: nonAuthenticatedSelector,
});

export const userOrElse = (
  Component,
  FailureComponent = null,
  AuthenticatingComponent = null,
) =>
  connectedAuthWrapper({
    authenticatingSelector,
    authenticatedSelector,
    wrapperDisplayName: 'AuthLoader',
    AuthenticatingComponent: AuthenticatingComponent || (() => null),
    FailureComponent: FailureComponent || (() => null),
  })(Component);

export const withLoggedIn = compose(
  connect(state => ({
    loggingIn: authenticatingSelector(state),
    loggedIn: authenticatedSelector(state),
  })),
  branch(props => props.loggingIn, renderNothing),
);
