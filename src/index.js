import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';

const rootEl = document.getElementById('root');

ReactDOM.render(React.createElement(Root), rootEl);

if (module.hot) {
  module.hot.accept('./Root', () => {
    ReactDOM.render(React.createElement(Root), rootEl);
  });
}
