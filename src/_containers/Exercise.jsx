import React from 'react';
import {
  compose,
  branch,
  withStateHandlers,
  renderComponent,
  withProps,
  withHandlers,
  withState,
} from 'recompose';
import {
  adjust,
  append,
  evolve,
  last,
  isEmpty,
  length,
  init,
  pipe,
  pluck,
  map,
  countBy,
  identity,
  ifElse,
  always,
  toPairs,
  reduce,
  maxBy,
  prop,
  groupBy,
  mapObjIndexed,
  filter,
  chain,
  path,
  both,
  defaultTo,
} from 'ramda';

import Exercise from 'components/Exercise/Exercise';
import PreFinish from 'components/Exercise/PreFinish';
import Initial from 'components/Exercise/Initial';
import Statistics from 'components/Exercise/Statistics';

const addToHistory = (id, history) =>
  adjust(
    evolve({
      attempts: append(id),
    }),
    history.length - 1,
    history,
  );

const isGuessedTheFirstTime = historyRow => historyRow.attempts.length === 1;

const getAccuracy = history => {
  const correct = history.filter(isGuessedTheFirstTime).length;
  const total = history.length;
  return defaultTo(0, correct / total);
};

const getConfuses = pipe(pluck('attempts'), chain(init), countBy(identity));

const getMostConfused = ifElse(
  isEmpty,
  always(null),
  pipe(
    toPairs,
    map(([id, count]) => ({id, count})),
    reduce(maxBy(prop('count')), {count: 0}),
  ),
);

const getDetails = pipe(
  groupBy(q => last(q.attempts)),
  mapObjIndexed(value => {
    const confuses = getConfuses(value);
    return {
      accuracy: getAccuracy(value),
      confuses,
      mostConfused: getMostConfused(confuses),
    };
  }),
);

const isLastCorrect = props => {
  const lastAnswer = props.questions[props.history.length - 1];
  return last(last(props.history).attempts) === lastAnswer;
};

const handleFinish = compose(
  withState('isPreFinished', 'setPreFinish', false),
  withState('isFinished', 'setFinish', false),
  withHandlers({
    finish: props => () => {
      if (isEmpty(props.history) || props.isFinished) {
        console.log('Redirect to /');
      } else if (
        props.isPreFinished ||
        (length(props.history) === length(props.questions) &&
          isLastCorrect(props))
      ) {
        props.setPreFinish(false);
        props.setFinish(true);
      } else {
        props.setPreFinish(true);
      }
    },
    goBack: props => () => {
      props.setPreFinish(false);
    },
  }),
  branch(
    props => props.isPreFinished,
    renderComponent(props => (
      <PreFinish goBack={props.goBack} finish={props.finish} />
    )),
  ),
  branch(
    props => props.isFinished,
    renderComponent(props => {
      const history = isLastCorrect(props)
        ? props.history
        : init(props.history);

      const details = getDetails(history);

      const statistics = props.choices.map(choice => {
        const isCorrect = both(
          q => q.attempts[0] === choice.id,
          isGuessedTheFirstTime,
        );
        const isHeard = q => last(q.attempts) === choice.id;
        const mostConfusedId = path([choice.id, 'mostConfused', 'id'], details);
        return {
          ...choice,
          timesHeard: length(filter(isHeard, history)),
          timesCorrect: length(filter(isCorrect, history)),
          accuracy: path([choice.id, 'accuracy'], details),
          mostConfused: path([mostConfusedId, 'text'], props.choices),
        };
      });

      const summary = {
        heard: length(history),
        correct: length(filter(isGuessedTheFirstTime, history)),
        accuracy: getAccuracy(history),
      };

      return (
        <Statistics
          unit={props.unit}
          statistics={statistics}
          summary={summary}
          finish={props.finish}
        />
      );
    }),
  ),
);

const handleStart = branch(
  props => isEmpty(props.history),
  renderComponent(props => (
    <Initial title={props.title} start={props.hearNext} finish={props.finish} />
  )),
);

export default compose(
  withStateHandlers(
    {
      history: [],
    },
    {
      nextQuestion: state => () => ({
        history: append({attempts: []}, state.history),
      }),

      makeChoice: state => choiceId => ({
        history: addToHistory(choiceId, state.history),
      }),
    },
  ),
  withHandlers({
    hearNext: props => () => {
      console.log(props.questions[length(props.history)]);
      props.nextQuestion();
    },
    hearAgain: props => () => {
      console.log(props.questions[length(props.history) - 1]);
    },
  }),

  handleFinish,

  handleStart,

  withProps(props => {
    const lastHistory = last(props.history);

    const lastAttempt = last(lastHistory.attempts);
    const correctAnswer = props.questions[props.history.length - 1];

    const isAnswered = lastAttempt === correctAnswer;

    const correctCount = isAnswered
      ? props.history.length
      : props.history.length - 1;

    return {
      isAnswered,
      correctCount,
      correctAnswer,
      isLast: correctCount === props.questions.length,
      totalCount: props.questions.length,
      choices: props.choices.map(choice => ({
        ...choice,
        isTouched: lastHistory.attempts.includes(choice.id),
      })),
    };
  }),
)(Exercise);
