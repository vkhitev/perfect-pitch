import React from 'react';

import {storiesOf} from '@storybook/react';
import centered from '@storybook/addon-centered';
import {withKnobs, number} from '@storybook/addon-knobs/react';

import Panel from 'components/Panel/Panel';
import PanelHeader from 'components/Panel/Header';
import Progress from 'components/Secondary/Progress';
import ExternalLink from 'components/Secondary/ExternalLink';

import themeProvider from './util/themeProvider';
import bordered from './util/bordered';

const ProgressKnob = () =>
  number('Value', 50, {
    range: true,
    min: 0,
    max: 100,
    step: 1,
  });

storiesOf('Secondary', module)
  .addDecorator(themeProvider)
  .addDecorator(bordered)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('Progress', () => <Progress value={ProgressKnob()} />)
  .add('Progress + Panel', () => (
    <Panel>
      <PanelHeader>Progress</PanelHeader>
      <Progress value={ProgressKnob()} />
    </Panel>
  ))
  .add('External Link', () => (
    <ExternalLink href="https://t.me/perfect_pitch">
      Telegram dev channel
    </ExternalLink>
  ))
  .add('External Link + Panel', () => (
    <Panel>
      <PanelHeader>Follow us</PanelHeader>
      <ExternalLink href="https://t.me/perfect_pitch" gutterBottom>
        Telegram dev channel
      </ExternalLink>
      <ExternalLink href="https://github.com/vkhitev/perfect-pitch">
        GitHub repository
      </ExternalLink>
    </Panel>
  ));
