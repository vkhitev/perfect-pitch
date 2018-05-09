import React from 'react';
import styled, {keyframes} from 'styled-components';
import {Link} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import Background from 'components/Background';
import {LOGIN} from 'constants/routes';

const fadeIn = keyframes`
  from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const MainPaper = styled(Paper).attrs({
  elevation: 15,
})`
  animation: ${fadeIn} ease-in 1.5s;
  padding: 160px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid ${props => props.theme.palette.primary.light};
`;

const MainText = styled(Typography).attrs({
  variant: 'display2',
})`
  padding-bottom: 16px;
`;

const SecondaryText = styled(Typography).attrs({
  variant: 'headline',
  color: 'textSecondary',
})`
  padding-bottom: 30px;
`;

export default () => (
  <Background>
    <MainPaper>
      <MainText>Welcome to Perfect Pitch</MainText>
      <SecondaryText>Place where you can develop yourself</SecondaryText>
      <Button
        component={Link}
        to={LOGIN}
        variant="raised"
        color="primary"
        size="large"
      >
        Start your journey
      </Button>
    </MainPaper>
  </Background>
);
