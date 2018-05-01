import {compose} from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import {reactReduxFirebase} from 'react-redux-firebase';
import {reduxFirestore} from 'redux-firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDhpcbwJdAN9DpJsuvc9ufzG3rNwYlNIdQ',
  authDomain: 'perfect-pitch-7e3e4.firebaseapp.com',
  databaseURL: 'https://perfect-pitch-7e3e4.firebaseio.com',
  projectId: 'perfect-pitch-7e3e4',
  storageBucket: 'perfect-pitch-7e3e4.appspot.com',
  messagingSenderId: '633067185130',
};

firebase.initializeApp(firebaseConfig);

const firestoreSettings = {
  timestampsInSnapshots: true,
};

const firestore = firebase.firestore();
firestore.settings(firestoreSettings);

const config = {
  userProfile: 'users',
  enableLogging: false,
};

export default compose(
  reactReduxFirebase(firebase, config),
  reduxFirestore(firebase),
);
