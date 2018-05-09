import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {ThemeProvider} from 'styled-components';
import CssBaseline from 'material-ui/CssBaseline';
import {
  createGenerateClassName,
  jssPreset,
  MuiThemeProvider,
} from 'material-ui/styles';
import JssProvider from 'react-jss/lib/JssProvider';
import {create} from 'jss';

import theme from 'ui/theme';
import store, {history} from 'store';
import App from 'components/App';

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = document.getElementById('jss-insertion-point');

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </MuiThemeProvider>
        </ThemeProvider>
      </JssProvider>
    </ConnectedRouter>
  </Provider>
);
