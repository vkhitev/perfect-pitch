import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import {getFirebase} from 'react-redux-firebase';
import createHistory from 'history/createBrowserHistory';

import rootReducer from './reducer';

import firebaseEnhancer from './enhancers/firebase';
import devtoolsEnhancer from './enhancers/devtools';

export const history = createHistory();

const middleware = [
  thunk.withExtraArgument(getFirebase),
  routerMiddleware(history),
];

const enhancers = [firebaseEnhancer];
if (devtoolsEnhancer) {
  enhancers.push(devtoolsEnhancer);
}

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware), ...enhancers),
);

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(rootReducer);
    });
  }
}

export default store;
