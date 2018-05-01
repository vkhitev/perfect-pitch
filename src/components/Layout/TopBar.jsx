import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import TopNavigation from 'containers/TopNavigation';
import {HOME} from 'constants/routes';

const StyledAppBar = styled(AppBar).attrs({
  position: 'static',
})`
  height: 70px;
  padding-top: 3px;
`;

const StyledToolbar = styled(Toolbar)`
  width: 100%;
  min-width: 940px;
  max-width: 1100px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 0;
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
