import React from 'react';

import {storiesOf} from '@storybook/react';
import centered from '@storybook/addon-centered';

import SkillRow from 'components/Dashboard/SkillRow';
import SkillPreview, {colors} from 'components/Dashboard/SkillPreview';
import SkillCard from 'components/Skill/SkillCard';
import SkillContainer from 'components/Skill/SkillContainer';
import SkillHeader from 'components/Skill/SkillHeader';

import rewire from './util/rewire';
import themeProvider from './util/themeProvider';
import bordered from './util/bordered';

rewire(SkillPreview);
rewire(SkillCard);

storiesOf('Dashboard', module)
  .addDecorator(themeProvider)
  .addDecorator(bordered)
  .addDecorator(centered)
  .add('Skill Preview', () => (
    <SkillPreview
      color={colors.blue}
      label="Long long long label"
      to="/"
      progress={0}
    />
  ))
  .add('Skill Row', () => (
    <SkillRow>
      <SkillPreview
        color={colors.blue}
        label="Long long long label"
        to="/"
        progress={0}
      />
      <SkillPreview
        color={colors.red}
        label="Long long long label"
        to="/"
        progress={0.25}
      />
      <SkillPreview
        color={colors.green}
        label="Long long long label"
        to="/"
        progress={0.5}
      />
    </SkillRow>
  ))
  .add('Skill Rows', () => (
    <React.Fragment>
      <SkillRow>
        <SkillPreview
          color={colors.green}
          label="Long long long label"
          to="/"
          progress={0.5}
        />
        <SkillPreview
          color={colors.blue}
          label="Long long long label"
          to="/"
          progress={0.75}
        />
        <SkillPreview
          color={colors.red}
          label="Long long long label"
          to="/"
          progress={1}
        />
      </SkillRow>
      <SkillRow>
        <SkillPreview
          color={colors.blue}
          label="Long long long label"
          to="/"
          progress={0}
        />
        <SkillPreview
          color={colors.red}
          label="Long long long label"
          to="/"
          progress={0.25}
        />
      </SkillRow>
      <SkillRow>
        <SkillPreview
          color={colors.blue}
          label="Long long long label"
          to="/"
          progress={0}
        />
      </SkillRow>
    </React.Fragment>
  ));

storiesOf('Skill', module)
  .addDecorator(themeProvider)
  .addDecorator(bordered)
  .addDecorator(centered)
  .add('Skill Card', () => (
    <SkillCard
      completed={false}
      title="Very long skill title"
      description="Very long skill description description description description description description"
      locked={false}
      link="/"
    />
  ))
  .add('Skill Container', () => (
    <SkillContainer title="Very long skill container title">
      <SkillCard
        completed={false}
        title="Very long skill title"
        description="Very long skill description"
        locked={false}
        link="/"
      />
      <SkillCard
        completed={false}
        title="Very long skill title"
        description="Very long skill description description description description description description"
        locked={false}
        link="/"
      />
    </SkillContainer>
  ))
  .add('Skill Containers + Header', () => (
    <React.Fragment>
      <SkillHeader
        title="Very long skill header"
        completedCount={10}
        totalCount={15}
        onClickPractice={() => {}}
      />
      <SkillContainer title="Very long skill container title">
        <SkillCard
          completed={false}
          title="Very long skill title"
          description="Very long skill description"
          locked={false}
          link="/"
        />
        <SkillCard
          completed={false}
          title="Very long skill title"
          description="Very long skill description description description description description description"
          locked={false}
          link="/"
        />
      </SkillContainer>
      <SkillContainer title="Very long skill container title">
        <SkillCard
          completed={false}
          title="Very long skill title"
          description="Very long skill description description description description description description"
          locked={false}
          link="/"
        />
        <SkillCard
          completed={false}
          title="Very long skill title"
          description="Very long skill description"
          locked={false}
          link="/"
        />
      </SkillContainer>
    </React.Fragment>
  ));
