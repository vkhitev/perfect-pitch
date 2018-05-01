import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {compose, setPropTypes, defaultProps} from 'recompose';

import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';

import {SIGNUP, RESTORE_PASSWORD} from 'constants/routes';
import Wrapper from './Wrapper';
import FormTextField from './FormTextField';
import GoogleButton from './GoogleButton';

export default compose(
  setPropTypes({
    logInWithGoogle: PropTypes.func.isRequired,
    logIn: PropTypes.func.isRequired,
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
    logInButton: {
      marginTop: 12,
    },
    logInError: {
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
    forgotPassword: {
      padding: 10,
      backgroundColor: 'rgba(100, 100, 100, 0.1)',
    },
    forgotPasswordLink: {
      textDecoration: 'none',
      color: 'inherit',
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
  })),
)(
  ({
    updateField,
    logIn,
    logInWithGoogle,
    error,
    email,
    password,
    pristine,
    classes,
  }) => (
    <Wrapper>
      <Paper className={classes.paper} elevation={5}>
        <form onSubmit={logIn} className={classes.formTop} noValidate>
          <Typography variant="headline" align="center" gutterBottom>
            Log In
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
            className={classes.logInButton}
          >
            Log in
          </Button>
          {error && (
            <Typography
              variant="subheading"
              color="error"
              className={classes.logInError}
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
            Not registered?
          </Typography>
          <Button component={Link} color="primary" to={SIGNUP}>
            Sign Up
          </Button>
        </Grid>

        <Divider />

        <Typography
          variant="caption"
          color="textSecondary"
          align="center"
          className={classes.forgotPassword}
        >
          <Link className={classes.forgotPasswordLink} to={RESTORE_PASSWORD}>
            Forgot password?
          </Link>
        </Typography>
      </Paper>
    </Wrapper>
  ),
);
