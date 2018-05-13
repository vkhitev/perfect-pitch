export const complexities = {
  basic: 'Basic',
  advanced: 'Advanced',
  expert: 'Expert',
};

export const labels = {
  intervals: 'Intervals',
  chords: 'Chords',
  scales: 'Scales',
  'chord-progressions': 'Chord Progressions',
  'perfect-pitch': 'Perfect Pitch',
};

export default [
  {
    level: 1,
    levelItems: [
      {
        id: 'intervals-1-1',
        category: 'intervals',
        complexity: 'BASIC',
        progress: 1,
      },
    ],
  },
  {
    level: 2,
    levelItems: [
      {
        id: 'chords-1-1',
        category: 'chords',
        complexity: 'BASIC',
        progress: 0.4,
      },
      {
        id: 'scales-1-1',
        category: 'scales',
        complexity: 'BASIC',
        progress: 0.68,
      },
      {
        id: 'chord-progressions-1-1',
        category: 'chord-progressions',
        complexity: 'BASIC',
        progress: 0.2,
      },
    ],
  },
  {
    level: 3,
    locked: true,
    levelItems: [
      {
        id: 'intervals-1-2',
        category: 'intervals',
        complexity: 'BASIC',
        progress: 0,
      },
      {
        id: 'scales-1-2',
        category: 'scales',
        complexity: 'BASIC',
        progress: 0,
      },
    ],
  },
  {
    level: 4,
    locked: true,
    levelItems: [
      {
        id: 'perfect-pitch-1-2',
        category: 'perfect-pitch',
        complexity: 'BASIC',
        progress: 0,
      },
    ],
  },
  {
    level: 5,
    locked: true,
    levelItems: [
      {
        id: 'perfect-pitch-1-3',
        category: 'perfect-pitch',
        complexity: 'BASIC',
        progress: 0,
      },
      {
        id: 'scales-1-3',
        category: 'scales',
        complexity: 'BASIC',
        progress: 0,
      },
    ],
  },
];
