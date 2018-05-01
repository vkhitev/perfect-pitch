import styled from 'styled-components';
import Grid from 'material-ui/Grid';

const Wrapper = styled(Grid).attrs({
  container: true,
  justify: 'center',
})`
  margin-top: 100px;
  margin-bottom: 40px;
`;

export default Wrapper;
