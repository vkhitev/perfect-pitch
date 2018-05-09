import styled from 'styled-components';

import Centered from 'components/Centered';
import LandingBg from 'assets/mountains.png';

const Background = styled(Centered)`
  background-image: url(${LandingBg});
  background-size: cover;

  & > div {
    padding-top: 56px;
  }

  @media (min-width: 600px) {
    & > div {
      padding-top: 64px;
    }
  }
`;

export default Background;
