import ReactDOM from 'react-dom';
import {createGenerateClassName, jssPreset} from 'material-ui/styles';

import store, {history} from 'store';
import theme from 'ui/theme';
import IndexPage from 'pages/index';
import {create} from 'jss';

import withRoot from './withRoot';

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = document.getElementById('jss-insertion-point');

const rootDecorator = withRoot({
  store,
  history,
  theme,
  jss,
  generateClassName,
});

const rootEl = document.getElementById('root');

ReactDOM.render(rootDecorator(IndexPage), rootEl);

// Enabling Hot Module Replacement for React components
// if (process.env.NODE_ENV !== 'production') {
//   if (module.hot) {
//     module.hot.accept('./pages/index.jsx', () => {
//       ReactDOM.render(rootDecorator(IndexPage), rootEl);
//     });
//   }
// }
