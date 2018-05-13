import violin from 'assets/icons/previews/violin.svg';
import drum from 'assets/icons/previews/drum.svg';
import guitar from 'assets/icons/previews/guitar.svg';
import piano from 'assets/icons/previews/piano.svg';
import note from 'assets/icons/previews/music-note.svg';

const webpackRequireContext = require.context('./theory', false, /.md$/);
const theory = webpackRequireContext
  .keys()
  .reduce(
    (memo, fileName) =>
      memo.set(
        fileName.match(/.\/([^.]+).*/)[1],
        webpackRequireContext(fileName),
      ),
    new Map(),
  );

const details = {
  intervals: {
    name: 'Intervals',
    theory: theory.get('intervals'),
    icon: guitar,
  },
  chords: {
    name: 'Chords',
    theory: theory.get('chords'),
    icon: drum,
  },
  scales: {
    name: 'Scales',
    theory: theory.get('scales'),
    icon: violin,
  },
  'chord-progressions': {
    name: 'Chord Progressions',
    theory: theory.get('chord-progressions'),
    icon: piano,
  },
  'perfect-pitch': {
    name: 'Perfect Pitch',
    theory: theory.get('perfect-pitch'),
    icon: note,
  },
};

export default details;
