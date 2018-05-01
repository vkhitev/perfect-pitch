import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

import Wrapper from './Wrapper';

const Initial = ({title, start, finish}) => (
  <Wrapper component={Paper} container>
    <Grid container direction="column" justify="space-between">
      <Grid item>
        <Typography variant="display1" gutterBottom>
          {title}
        </Typography>
      </Grid>

      <Grid item container justify="center">
        <Button variant="raised" color="primary" size="large" onClick={start}>
          Hear first question
        </Button>
      </Grid>

      <Grid item container justify="flex-end">
        <Button color="secondary" onClick={finish}>
          End quiz
        </Button>
      </Grid>
    </Grid>
  </Wrapper>
);

Initial.propTypes = {
  title: PropTypes.string.isRequired,
  start: PropTypes.func.isRequired,
  finish: PropTypes.func.isRequired,
};

export default Initial;
