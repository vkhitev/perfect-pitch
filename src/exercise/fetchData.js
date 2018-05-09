import intervals from './data/intervals';
import chords from './data/chords';
import scales from './data/scales';
import chordProgressions from './data/chordProgressions';
import perfectPitch from './data/perfectPitch';

const exerciseCollection = {
  intervals: {
    title: 'Intervals',
    unit: 'Interval',
    pool: intervals,
    data: {
      'intervals-1-1': {
        questions: [4, 7, 12],
        choices: [4, 7, 12],
      },
      'intervals-1-2': {
        questions: [2, 4, 5, 7, 9, 11, 12],
        choices: [2, 4, 5, 7, 9, 11, 12],
      },
      'intervals-1-3': {
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      },
      'intervals-2-1': {
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      },
      'intervals-2-2': {
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      },
      'intervals-2-3': {
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      },
    },
  },
  chords: {
    title: 'Chords',
    unit: 'Chord',
    pool: chords,
    data: {
      'chords-1-1': {
        questions: [4, 7, 12],
        choices: [4, 7, 12],
      },
      'chords-1-2': {
        questions: [2, 4, 5, 7, 9, 11, 12],
        choices: [2, 4, 5, 7, 9, 11, 12],
      },
      'chords-1-3': {
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      },
      'chords-2-1': {
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      },
      'chords-2-2': {
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      },
      'chords-2-3': {
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      },
    },
  },
  scales: {
    title: 'Scales',
    unit: 'Scale',
    pool: scales,
    data: {
      'scales-1-1': {
        questions: [4, 7, 12],
        choices: [4, 7, 12],
      },
      'scales-1-2': {
        questions: [2, 4, 5, 7, 9, 11, 12],
        choices: [2, 4, 5, 7, 9, 11, 12],
      },
      'scales-1-3': {
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      },
      'scales-2-1': {
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      },
      'scales-2-2': {
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      },
      'scales-2-3': {
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      },
    },
  },
  'chord-progressions': {
    title: 'Chord Progressions',
    unit: 'Progression',
    pool: chordProgressions,
    data: {
      'chord-progressions-1-1': {
        questions: [4, 7, 12],
        choices: [4, 7, 12],
      },
      'chord-progressions-1-2': {
        questions: [2, 4, 5, 7, 9, 11, 12],
        choices: [2, 4, 5, 7, 9, 11, 12],
      },
      'chord-progressions-1-3': {
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      },
      'chord-progressions-2-1': {
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      },
      'chord-progressions-2-2': {
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      },
      'chord-progressions-2-3': {
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      },
    },
  },
  'perfect-pitch': {
    title: 'Perfect Pitch',
    unit: 'Note',
    pool: perfectPitch,
    data: {
      'perfect-pitch-1-1': {
        questions: [4, 7, 12],
        choices: [4, 7, 12],
      },
      'perfect-pitch-1-2': {
        questions: [2, 4, 5, 7, 9, 11, 12],
        choices: [2, 4, 5, 7, 9, 11, 12],
      },
      'perfect-pitch-1-3': {
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      },
      'perfect-pitch-2-1': {
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      },
      'perfect-pitch-2-2': {
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      },
      'perfect-pitch-2-3': {
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      },
    },
  },
};

const build = (values, ids) => {
  const stringIds = ids.map(id => id.toString());
  return values.filter(value => stringIds.includes(value.id));
};

const fetchData = (category, exerciseId) => ({
  title: exerciseCollection[category].title,
  unit: exerciseCollection[category].unit,
  questions: build(
    exerciseCollection[category].pool,
    exerciseCollection[category].data[exerciseId].questions,
  ).map(question => question.id),
  choices: build(
    exerciseCollection[category].pool,
    exerciseCollection[category].data[exerciseId].choices,
  ),
});

export default fetchData;
