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

import {SIGNUP} from 'constants/routes';
import Wrapper from './Wrapper';
import FormTextField from './FormTextField';

export default compose(
  setPropTypes({
    restore: PropTypes.func.isRequired,
    updateField: PropTypes.func.isRequired,
    error: PropTypes.string,
    email: PropTypes.string,
    pristine: PropTypes.bool,
    messageSent: PropTypes.bool,
  }),
  defaultProps({
    error: null,
    email: '',
    pristine: true,
    messageSent: false,
  }),
  withStyles(theme => ({
    paper: {
      maxWidth: 350,
      backgroundColor: '#FAFAFA',
      borderTop: `5px solid ${theme.palette.primary.main}`,
    },
    title: {
      marginBottom: 20,
    },
    formTop: {
      paddingTop: 30,
      paddingLeft: 25,
      paddingRight: 25,
      paddingBottom: 20,
    },
    restoreButton: {
      marginTop: 12,
    },
    restoreError: {
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
    messageSent: {
      width: 350,
      paddingTop: 30,
      paddingLeft: 25,
      paddingRight: 25,
      paddingBottom: 30,
    },
  })),
)(({restore, updateField, error, email, pristine, messageSent, classes}) => (
  <Wrapper>
    <Paper className={classes.paper} elevation={5}>
      {messageSent ? (
        <div className={classes.messageSent}>
          <Typography
            variant="headline"
            align="center"
            className={classes.title}
          >
            Thank you!
          </Typography>
          <Typography variant="subheading" align="center">
            Please check your email.
          </Typography>
        </div>
      ) : (
        <React.Fragment>
          <form className={classes.formTop} onSubmit={restore} noValidate>
            <Typography
              variant="headline"
              align="center"
              className={classes.title}
            >
              Restore password
            </Typography>
            <Typography variant="body1" align="center">
              We will send you instructions on how to reset your password by
              email.
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
            <Button
              type="submit"
              color="primary"
              variant="raised"
              fullWidth
              className={classes.restoreButton}
            >
              Submit
            </Button>
            {error && (
              <Typography
                variant="subheading"
                color="error"
                className={classes.restoreError}
              >
                {error}
              </Typography>
            )}
          </form>
          <Divider />
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
        </React.Fragment>
      )}
    </Paper>
  </Wrapper>
));
