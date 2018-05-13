import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {ThemeProvider} from 'styled-components';
import CssBaseline from 'material-ui/CssBaseline';
import {MuiThemeProvider} from 'material-ui/styles';
import JssProvider from 'react-jss/lib/JssProvider';

const withRoot = ({
  store,
  history,
  theme,
  jss,
  generateClassName,
}) => Component => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Component />
          </MuiThemeProvider>
        </ThemeProvider>
      </JssProvider>
    </ConnectedRouter>
  </Provider>
);

export default withRoot;
