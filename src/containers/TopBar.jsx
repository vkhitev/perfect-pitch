import React from 'react';
import {Link} from 'react-router-dom';
import styled, {keyframes, css} from 'styled-components';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import TopNavigation from 'containers/TopNavigation';
import {HOME} from 'constants/routes';

const slideIn = keyframes`
  from {
    opacity: 0.2;
		max-height: 0;
	}
	to {
    opacity: 1;
		max-height: 100px;
	}
`;

const withSlideIn = css`
  max-height: 0;
  animation: ${slideIn} ease-out 2s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
`;

const StyledAppBar = styled(AppBar)`
  ${props => !props.loggedIn && withSlideIn};
`;

const fadeIn = keyframes`
  from {
    visibility: hidden;
    opacity: 0;
	}
	to {
    visibility: visible;
    opacity: 1;
	}
`;

const withFadeIn = css`
  visibility: hidden;
  animation: ${fadeIn} ease-out 2s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
`;

const StyledToolbar = styled(Toolbar)`
  ${props => !props.loggedIn && withFadeIn} width: 100%;
  min-width: 940px;
  max-width: 1100px;
  margin: 0 auto;
  color: white;
`;

const HomeLink = styled(Typography).attrs({
  variant: 'title',
  color: 'inherit',
})`
  flex: 1;

  & > a {
    text-decoration: none;
    color: inherit;
  }
`;

const Header = () => (
  <StyledAppBar>
    <StyledToolbar>
      <HomeLink>
        <Link to={HOME}>Perfect Pitch</Link>
      </HomeLink>
      <TopNavigation />
    </StyledToolbar>
  </StyledAppBar>
);

export default Header;
