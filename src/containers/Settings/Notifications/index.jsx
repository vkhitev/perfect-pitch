import React from 'react';
import styled from 'styled-components';

import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

import Paper from 'ui/Paper';

const Item = styled.div`
  display: block;
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing.unit * 2}px;
  }
`;

const Account = () => (
  <Paper p={4}>
    <Item>
      <Grid container justify="space-between">
        <Typography variant="headline">Notifications</Typography>
        <Button variant="raised" color="primary">
          Save changes
        </Button>
      </Grid>
    </Item>
    <Item>
      <Typography>You do not receive any notifications yet.</Typography>
    </Item>
  </Paper>
);

export default Account;
