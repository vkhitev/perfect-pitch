import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {setPropTypes, defaultProps, compose} from 'recompose';

import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import {LOGIN} from 'constants/routes';
import Wrapper from './Wrapper';
import FormTextField from './FormTextField';
import GoogleButton from './GoogleButton';

export default compose(
  setPropTypes({
    logInWithGoogle: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    updateField: PropTypes.func.isRequired,
    error: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    pristine: PropTypes.bool,
  }),
  defaultProps({
    error: null,
    email: '',
    password: '',
    pristine: true,
  }),
  withStyles(theme => ({
    paper: {
      maxWidth: 350,
      backgroundColor: '#FAFAFA',
      borderTop: `5px solid ${theme.palette.primary.main}`,
    },
    formTop: {
      paddingTop: 30,
      paddingLeft: 25,
      paddingRight: 25,
      paddingBottom: 20,
    },
    formMiddle: {
      paddingTop: 20,
      paddingLeft: 25,
      paddingRight: 25,
      paddingBottom: 20,
      background: `repeating-linear-gradient(
      45deg,
      #606dbc,
      #606dbc 10px,
      #465298 10px,
      #465298 20px
    )`,
    },
    signUpButton: {
      marginTop: 12,
    },
    signUpError: {
      marginTop: 20,
    },
    formBottom: {
      paddingTop: 20,
      paddingLeft: 25,
      paddingRight: 25,
      paddingBottom: 20,
    },
    alreadyRegistered: {
      minHeight: 36,
      display: 'flex',
      alignItems: 'center',
    },
  })),
)(
  ({
    updateField,
    signUp,
    logInWithGoogle,
    error,
    email,
    password,
    pristine,
    classes,
  }) => (
    <Wrapper>
      <Paper className={classes.paper} elevation={5}>
        <form onSubmit={signUp} className={classes.formTop} noValidate>
          <Typography variant="headline" align="center" gutterBottom>
            Sign Up
          </Typography>
          <FormTextField
            autoFocus
            label="Email"
            name="email"
            type="email"
            pristine={pristine}
            value={email}
            onChange={updateField}
          />
          <FormTextField
            label="Password"
            name="password"
            type="password"
            pristine={pristine}
            value={password}
            onChange={updateField}
          />
          <Button
            type="submit"
            color="primary"
            variant="raised"
            fullWidth
            className={classes.signUpButton}
          >
            Sign Up
          </Button>
          {error && (
            <Typography
              variant="subheading"
              color="error"
              className={classes.signUpError}
            >
              {error}
            </Typography>
          )}
        </form>

        <div className={classes.formMiddle}>
          <Typography
            variant="subheading"
            align="center"
            style={{marginBottom: 20, color: 'white'}}
          >
            Log in with an existing account
          </Typography>

          <Grid container spacing={0} justify="center">
            <GoogleButton onClick={logInWithGoogle} />
          </Grid>
        </div>

        <Grid
          container
          spacing={0}
          justify="space-between"
          className={classes.formBottom}
        >
          <Typography
            variant="subheading"
            color="textSecondary"
            className={classes.alreadyRegistered}
          >
            Already registered?
          </Typography>
          <Button component={Link} color="primary" to={LOGIN}>
            Log In
          </Button>
        </Grid>
      </Paper>
    </Wrapper>
  ),
);
