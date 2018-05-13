import React from 'react';

import Grid from 'ui/Grid';

import Skills from 'containers/Skills';
import Progress from 'containers/Progress';
import FollowUs from 'containers/FollowUs';

const DashboardPage = () => (
  <Grid container justify="center" spacing={40} p={5}>
    <Grid item xs={12} sm={6} lg={4}>
      <Skills />
    </Grid>
    <Grid item container spacing={40} direction="column" xs={12} sm={4} lg={3}>
      <Grid item>
        <Progress />
      </Grid>
      <Grid item>
        <FollowUs />
      </Grid>
    </Grid>
  </Grid>
);

export default DashboardPage;
