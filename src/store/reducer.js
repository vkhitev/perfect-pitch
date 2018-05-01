import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
  routing: routerReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
