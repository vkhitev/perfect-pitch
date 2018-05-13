import React from 'react';
import styled from 'styled-components';

import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';

import Paper from 'ui/Paper';

const Item = styled.div`
  display: block;
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing.unit * 2}px;
  }
`;

const Account = () => (
  <Paper p={4}>
    <Grid container justify="space-between">
      <Typography variant="headline">Password</Typography>
      <Button variant="raised" color="primary">
        Save changes
      </Button>
    </Grid>
    <Item>
      <TextField id="current-password" label="Current Password" />
    </Item>
    <Item>
      <TextField id="new-password" label="New Password" />
    </Item>
  </Paper>
);

export default Account;
