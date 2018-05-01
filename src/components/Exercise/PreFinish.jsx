import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

import Wrapper from './Wrapper';

const SadSmile = styled(Typography).attrs({
  variant: 'display3',
  children: ':(',
})`
  position: absolute;
  user-select: none;
`;

const WarningText = styled(Typography).attrs({
  variant: 'body1',
  align: 'center',
})`
  width: 100%;
`;

const PreFinish = ({goBack, finish}) => (
  <Wrapper component={Paper} container>
    <SadSmile />
    <Grid container direction="column" justify="center">
      <Grid container justify="center">
        <WarningText gutterBottom>
          Are you sure that you want to finish execise? Results will not be
          saved.
        </WarningText>
        <Button color="primary" onClick={goBack}>
          Go back
        </Button>
        <Button color="secondary" onClick={finish}>
          Finish
        </Button>
      </Grid>
    </Grid>
  </Wrapper>
);

PreFinish.propTypes = {
  goBack: PropTypes.func.isRequired,
  finish: PropTypes.func.isRequired,
};

export default PreFinish;
