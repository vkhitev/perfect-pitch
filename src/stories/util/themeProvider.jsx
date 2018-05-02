import React from 'react';

import CssBaseline from 'material-ui/CssBaseline';
import {
  createGenerateClassName,
  jssPreset,
  MuiThemeProvider,
} from 'material-ui/styles';
import JssProvider from 'react-jss/lib/JssProvider';
import {create} from 'jss';

import theme from 'ui/theme';

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = document.getElementById('jss-insertion-point');

const JssDecorator = storyFn => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {storyFn()}
    </MuiThemeProvider>
  </JssProvider>
);

export default JssDecorator;
