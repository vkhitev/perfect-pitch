import styled from 'styled-components';

import LandingBg from 'assets/mountains.png';

const Background = styled.div`
  background-image: url(${LandingBg});
  background-size: cover;
  background-attachment: fixed;
  flex: 1;
  overflow: hidden;
`;

export default Background;
