import styled from 'styled-components';
import MuiPaper from 'material-ui/Paper';

import {paddingProps, marginProps, sizeProps} from './props';

const Paper = styled(MuiPaper)`
  ${paddingProps};
  ${marginProps};
  ${sizeProps};
`;

export default Paper;
