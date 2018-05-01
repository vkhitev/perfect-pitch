import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import {LinearProgress} from 'material-ui/Progress';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

import Wrapper from './Wrapper';

const ProgressBar = styled(Grid)`
  margin-bottom: 32px;
`;

function getChoiceButtonColor(choice, correctAnswer, isAnswered) {
  if (isAnswered && choice.id === correctAnswer) {
    return 'primary';
  }
  if (choice.isTouched) {
    return 'secondary';
  }
  return 'default';
}

const Exercise = ({
  title,
  correctCount,
  totalCount,
  choices,
  isAnswered,
  isLast,
  correctAnswer,

  hearNext,
  hearAgain,
  makeChoice,
  finish,
}) => (
  <Wrapper component={Paper} container>
    <Grid container direction="column" justify="space-between">
      <Grid item>
        <Typography variant="display1" gutterBottom>
          {title}
        </Typography>

        <ProgressBar container justify="space-between">
          <Grid item xs={11} container direction="column" justify="center">
            <LinearProgress
              variant="determinate"
              value={correctCount / totalCount * 100}
            />
          </Grid>

          <Typography variant="body1" align="center">
            {correctCount} / {totalCount}
          </Typography>
        </ProgressBar>

        <Grid container spacing={8} justify="center">
          {isAnswered ? (
            <Grid item>
              <Button
                variant="raised"
                color="primary"
                onClick={isLast ? finish : hearNext}
              >
                {isLast ? 'Finish' : 'Hear next'}
              </Button>
            </Grid>
          ) : (
            <Grid item>
              <Button variant="raised" onClick={hearAgain}>
                Hear again
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>

      <Grid item container justify="center" spacing={8}>
        {choices.map(choice => (
          <Grid key={choice.id} item>
            <Button
              variant="raised"
              color={getChoiceButtonColor(choice, correctAnswer, isAnswered)}
              onClick={isAnswered ? hearAgain : () => makeChoice(choice.id)}
              disabled={isAnswered && choice.id !== correctAnswer}
            >
              {choice.text}
            </Button>
          </Grid>
        ))}
      </Grid>

      <Grid item container justify="flex-end">
        <Button color="secondary" onClick={finish}>
          End quiz
        </Button>
      </Grid>
    </Grid>
  </Wrapper>
);

Exercise.propTypes = {
  title: PropTypes.string.isRequired,
  correctCount: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  choices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
  isAnswered: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  correctAnswer: PropTypes.string.isRequired,

  hearNext: PropTypes.func.isRequired,
  hearAgain: PropTypes.func.isRequired,
  makeChoice: PropTypes.func.isRequired,
  finish: PropTypes.func.isRequired,
};

export default Exercise;
