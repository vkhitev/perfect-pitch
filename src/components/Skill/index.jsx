import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {compose, mapProps, lifecycle, withState, withProps} from 'recompose';
import qs from 'qs';
import {pipe, pluck, map, values, sum, length, chain} from 'ramda';
import ReactMarkdown from 'react-markdown';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import Background from 'components/Background';
import details from 'exercise/details';
import previews, {complexities} from 'fake/previews';

import SkillCard from './SkillCard';
import SkillContainer from './SkillContainer';
import SkillHeader from './SkillHeader';

const SkillPaper = styled(Paper)`
  width: 600px;
  margin: 40px auto;
`;

const parseRoute = mapProps(props => ({
  category: props.match.params.category,
  highlight: qs.parse(props.location.search).ex,
  url: props.match.url,
}));

const enhance = compose(
  parseRoute,
  withProps(props => {
    const allSkills = chain(item => item.levelItems, previews);
    const skills = allSkills.filter(skill => skill.category === props.category);
    return {
      skills: skills.map(skill => ({
        id: skill.id,
        category: skill.category,
        complexity: complexities[skill.complexity],
        completed: skill.progress === 1,
      })),
      total: skills.length,
      completed: skills.filter(skill => skill.progress === 1).length,
    };
  }),
  withState('theory', 'setTheory', ''),
  lifecycle({
    async componentDidMount() {
      const theoryResponse = await fetch(details[this.props.category].theory);
      const theory = await theoryResponse.text();
      this.props.setTheory(theory);
    },
  }),
);

const TheoryPanel = styled.div`
  padding: 24px;
`;

const Title = styled(Typography).attrs({
  variant: 'title',
})`
  color: #666;
  margin-left: 16px;
  margin-bottom: 24px;
`;

const SkillPage = props => (
  <Background>
    <SkillPaper>
      <SkillHeader
        title={details[props.category].name}
        completedCount={props.completed}
        totalCount={props.total}
        onClickPractice={() => {}}
      />
      {/* {props.skills.map(skill => (
        SkillContainer
      ))} */}
      {/* {Object.entries(skills.levels).map(([levelKey, levelValue]) => (
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
      ))} */}
      <TheoryPanel>
        <Title>Theory</Title>
        <Typography component="div" variant="body1">
          <ReactMarkdown
            source={props.theory}
            renderers={{
              heading: headingProps => (
                <Typography variant="title" {...headingProps} />
              ),
            }}
          />
        </Typography>
      </TheoryPanel>
    </SkillPaper>
  </Background>
);

SkillPage.propTypes = {
  category: PropTypes.string.isRequired,
  theory: PropTypes.string.isRequired,
  // highlight: PropTypes.string,
};

SkillPage.defaultProps = {
  // highlight: null,
};

export default enhance(SkillPage);
