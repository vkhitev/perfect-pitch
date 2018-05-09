import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {compose, mapProps, withProps} from 'recompose';
import qs from 'qs';
import {pipe, pluck, map, values, sum, length} from 'ramda';
import Paper from 'material-ui/Paper';

import Background from 'components/Background';
import {categories} from 'constants/human';

import SkillCard from './SkillCard';
import SkillContainer from './SkillContainer';
import SkillHeader from './SkillHeader';

const SkillPaper = styled(Paper)`
  width: 600px;
  margin: 40px auto;
`;

const progress = {
  completedExercises: {
    intervals: {
      'intervals-1': {
        'intervals-1-1': true,
        'intervals-1-2': true,
      },
    },
  },
  openSkills: {
    intervals: {
      'intervals-1': true,
    },
  },
};

const completed = progress.completedExercises.intervals;
const open = progress.openSkills.intervals;

const skills = {
  title: 'Intervals',
  levels: {
    'intervals-1': {
      title: 'Basic',
      exercises: {
        'intervals-1-1': {
          title: 'Level 1',
          description: 'Description 1',
        },
        'intervals-1-2': {
          title: 'Level 1',
          description: 'Description 1',
        },
        'intervals-1-3': {
          title: 'Level 1',
          description: 'Description 1',
        },
      },
    },
    'intervals-2': {
      title: 'Advanced',
      exercises: {
        'intervals-2-1': {
          title: 'Level 1',
          description: 'Description 1',
        },
        'intervals-2-2': {
          title: 'Level 1',
          description: 'Description 1',
        },
        'intervals-2-3': {
          title: 'Level 1',
          description: 'Description 1',
        },
        'intervals-2-4': {
          title: 'Level 1',
          description: 'Description 1',
        },
      },
    },
  },
};

const getCompletedCount = pipe(map(values), map(length), values, sum);

const getTotalCount = pipe(
  pluck('exercises'),
  map(values),
  map(length),
  values,
  sum,
);

const parseRoute = mapProps(props => ({
  category: props.match.params.category,
  highlight: qs.parse(props.location.search).ex,
  url: props.match.url,
}));

const enhance = compose(parseRoute, withProps({}));

const SkillPage = props => (
  <Background>
    <SkillPaper>
      <SkillHeader
        title={props.category}
        completedCount={getCompletedCount(completed)}
        totalCount={getTotalCount(skills.levels)}
        onClickPractice={() => {}}
      />
      {Object.entries(skills.levels).map(([levelKey, levelValue]) => (
        <SkillContainer key={levelKey} title={levelValue.title}>
          {Object.entries(levelValue.exercises).map(
            ([exerciseKey, exerciseValue]) => (
              <SkillCard
                key={exerciseKey}
                completed={
                  completed[levelKey] && completed[levelKey][exerciseKey]
                }
                title={exerciseValue.title}
                description={exerciseValue.description}
                locked={!open[levelKey]}
                link={`${props.url}/${exerciseKey}`}
                highlight={exerciseKey === props.highlight}
              />
            ),
          )}
        </SkillContainer>
      ))}
    </SkillPaper>
  </Background>
);

SkillPage.propTypes = {
  // category: PropTypes.string.isRequired,
  // highlight: PropTypes.string,
};

SkillPage.defaultProps = {
  // highlight: null,
};

export default enhance(SkillPage);
