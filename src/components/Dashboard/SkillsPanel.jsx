import React from 'react';
import {compose} from 'recompose';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';

import PanelHeader from 'components/Panel/Header';
import withMock from 'hocs/util/mock';
import skillPreviews, {labels} from 'fake/previews';
import details from 'exercise/details';

import SkillRow from './SkillRow';
import SkillPreview, {colors} from './SkillPreview';

const genColor = label => {
  if (/^[a-h]/i.test(label)) {
    return colors.blue;
  }
  if (/^[i-p]/i.test(label)) {
    return colors.red;
  }
  return colors.green;
};

const Wrapper = styled(Paper)`
  width: 492px;
  min-height: 800px;
  padding: 30px;
  margin-right: 20px;
`;

const SkillsPanel = ({skillPreviews}) => (
  <Wrapper>
    <PanelHeader>Skills</PanelHeader>
    {skillPreviews &&
      skillPreviews.map(row => (
        <SkillRow key={row.level} locked={row.locked}>
          {row.levelItems.map(item => (
            <SkillPreview
              key={item.id}
              label={labels[item.category]}
              locked={row.locked}
              color={genColor(labels[item.category])}
              progress={item.progress}
              icon={details[item.category].icon}
              to={`/skill/${item.category}?ex=${item.id}`}
            />
          ))}
        </SkillRow>
      ))}
  </Wrapper>
);

const enhance = compose(
  withMock(
    [],
    {
      skillPreviews,
    },
    0,
  ),
);

export default enhance(SkillsPanel);
