import React from 'react';
import styled from 'styled-components';
import Grid from 'material-ui/Grid';

import Panel from 'components/Panel/Panel';
import Header from 'components/Panel/Header';

import ProgressPanel from './ProgressPanel';
import ContactsPanel from './ContactsPanel';

const Wrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
`;

const Dashboard = () => (
  <Wrapper>
    <Grid container justify="center">
      <Panel>
        <Header>Kek</Header>
      </Panel>
      <div>
        <ProgressPanel />
        <ContactsPanel />
      </div>
    </Grid>
  </Wrapper>
);

export default Dashboard;
