import {connectedReduxRedirect} from 'redux-auth-wrapper/history4/redirect';
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper';
import {routerActions} from 'react-router-redux';

import {HOME, LOGIN} from 'constants/routes';

export const userIsAuthenticated = connectedReduxRedirect({
  redirectPath: LOGIN,
  allowRedirectBack: true,
  wrapperDisplayName: 'UserIsAuthenticated',
  redirectAction: routerActions.replace,
  authenticatingSelector: ({firebase: {auth, isInitializing}}) =>
    !auth.isLoaded || isInitializing === true,
  authenticatedSelector: ({firebase: {auth}}) => auth.isLoaded && !auth.isEmpty,
});

export const userIsNotAuthenticated = connectedReduxRedirect({
  redirectPath: HOME,
  allowRedirectBack: false,
  wrapperDisplayName: 'UserIsNotAuthenticated',
  redirectAction: routerActions.replace,
  authenticatingSelector: ({firebase: {auth, isInitializing}}) =>
    !auth.isLoaded || isInitializing === true,
  authenticatedSelector: ({firebase: {auth}}) => auth.isLoaded && auth.isEmpty,
});

export const userOrElse = (
  Component,
  FailureComponent = null,
  AuthenticatingComponent = null,
) =>
  connectedAuthWrapper({
    authenticatingSelector: ({firebase: {auth, isInitializing}}) =>
      !auth.isLoaded || isInitializing === true,
    authenticatedSelector: ({firebase: {auth}}) =>
      auth.isLoaded && !auth.isEmpty,
    wrapperDisplayName: 'AuthLoader',
    AuthenticatingComponent: AuthenticatingComponent || (() => null),
    FailureComponent: FailureComponent || (() => null),
  })(Component);
