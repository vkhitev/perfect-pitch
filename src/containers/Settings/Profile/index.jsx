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
      <Typography variant="headline">Profile</Typography>
      <Button variant="raised" color="primary">
        Save changes
      </Button>
    </Grid>
    <Item>
      <TextField id="name" label="Name" />
    </Item>
    <Item>
      <TextField id="location" label="Location" />
    </Item>
    <Item>
      <TextField id="bio" label="Bio" rowsMax={3} />
    </Item>
    <Item>
      <Typography>Learning since: 2018-03-07</Typography>
    </Item>
    <Item>
      <Grid container alignItems="center">
        <Typography>Google connect:</Typography>
        <Button variant="raised">Connect</Button>
      </Grid>
    </Item>
  </Paper>
);

export default Account;
