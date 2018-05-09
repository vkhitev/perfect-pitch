import React from 'react';
import {compose, withProps, withHandlers} from 'recompose';

import Exercise from 'containers/Exercise';
import Background from 'components/Background';

import fetchData from 'exercise/fetchData';

const enhance = compose(
  withProps(props => ({
    category: props.match.params.category,
    exerciseId: props.match.params.exercise,
  })),
  withHandlers({
    redirect: props => () => {
      props.history.push(`/skill/${props.category}`);
    },
  }),
  withProps(props => {
    const exercise = fetchData(props.category, props.exerciseId);

    return {
      title: exercise.title,
      unit: exercise.unit,
      questions: exercise.questions,
      choices: exercise.choices,
    };
  }),
);

const ExercisePage = props => (
  <Background>
    <Exercise {...props} />
  </Background>
);

export default enhance(ExercisePage);
