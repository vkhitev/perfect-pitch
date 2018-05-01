import React from 'react';

import {storiesOf} from '@storybook/react';
import centered from '@storybook/addon-centered';

import TopBar from 'components/Layout/TopBar';

import themeProvider from './themeProvider';

storiesOf('Layout', module)
  .addDecorator(themeProvider)
  .add('TopBar', () => <TopBar />)
  .add('Footer', () => <TopBar />);
