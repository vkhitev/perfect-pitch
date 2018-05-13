import React from 'react';
import styled from 'styled-components';
import {darken} from 'polished';

import Typography from 'material-ui/Typography';
import Paper from 'ui/Paper';

const ExternalLink = styled(Typography).attrs({
  variant: 'subheading',
  component: 'a',
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  text-decoration: none;
  color: #20a6e7;

  :hover {
    color: ${darken(0.2, '#20A6E7')};
  }
`;

const FollowUs = () => (
  <Paper p={4}>
    <Typography variant="headline" gutterBottom>
      Progress
    </Typography>
    <ExternalLink href="https://t.me/perfect_pitch" gutterBottom>
      Telegram dev channel
    </ExternalLink>
    <ExternalLink href="https://github.com/vkhitev/perfect-pitch">
      GitHub repository
    </ExternalLink>
  </Paper>
);

export default FollowUs;
