import React from 'react';
import PropTypes from 'prop-types';
import {compose, setPropTypes} from 'recompose';
import {withStyles} from 'material-ui/styles';
import GoogleButton from 'react-google-button';

export default compose(
  setPropTypes({
    onClick: PropTypes.func.isRequired,
  }),
  withStyles({
    googleButton: {
      padding: 0,
      margin: 0,
      outline: 0,
      border: 0,
      borderRadius: 2,
      '&:focus': {
        boxShadow: '0 0 13px rgba(66, 133, 244, 0.7)',
      },
    },
  }),
)(({onClick, classes}) => (
  <button className={classes.googleButton}>
    <GoogleButton label="Log in with Google" onClick={onClick} />
  </button>
));
