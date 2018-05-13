import styled from 'styled-components';
import MuiGrid from 'material-ui/Grid';

import {paddingProps, marginProps, sizeProps} from './props';

const Grid = styled(MuiGrid)`
  ${paddingProps};
  ${marginProps};
  ${sizeProps};
`;

export default Grid;
