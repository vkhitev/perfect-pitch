import React from 'react';

import {storiesOf} from '@storybook/react';
import centered from '@storybook/addon-centered';

import Exercise from 'containers/Exercise';

import themeProvider from './util/themeProvider';

const intervals3 = [
  {
    id: '1',
    text: 'Minor 2nd',
  },
  {
    id: '2',
    text: 'Major 2nd',
  },
  {
    id: '3',
    text: 'Minor 3rd',
  },
];

const intervals8 = [
  {
    id: '1',
    text: 'Minor 2nd',
  },
  {
    id: '2',
    text: 'Major 2nd',
  },
  {
    id: '3',
    text: 'Minor 3rd',
  },
  {
    id: '4',
    text: 'Major 3rd',
  },
  {
    id: '5',
    text: 'Perfect 4th',
  },
  {
    id: '6',
    text: 'Tritone',
  },
  {
    id: '7',
    text: 'Perfect 5th',
  },
  {
    id: '8',
    text: 'Perfect 5th',
  },
];

storiesOf('Exercise', module)
  .addDecorator(themeProvider)
  .addDecorator(centered)
  .add('Intervals 3', () => (
    <Exercise
      title="Intervals quiz"
      unit="Interval"
      questions={['3', '3']}
      choices={intervals3}
    />
  ))
  .add('Intervals 8', () => (
    <Exercise
      title="Intervals quiz"
      unit="Interval"
      questions={['3', '3', '2']}
      choices={intervals8}
    />
  ));
