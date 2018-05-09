import React from 'react';
import styled from 'styled-components';
import Grid from 'material-ui/Grid';
import Backgorund from 'components/Background';

import SkillsPanel from './SkillsPanel';
import ProgressPanel from './ProgressPanel';
import ContactsPanel from './ContactsPanel';

const Wrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
`;

const Dashboard = () => (
  <Backgorund>
    <Wrapper>
      <Grid container justify="center">
        <SkillsPanel />
        <div>
          <ProgressPanel />
          <ContactsPanel />
        </div>
      </Grid>
    </Wrapper>
  </Backgorund>
);

export default Dashboard;
