import styled from 'styled-components';
import Grid from 'material-ui/Grid';

const Wrapper = styled(Grid)`
  width: 850px;
  height: 750px;
  padding: 36px;
  border-radius: 20px;
  border: 2px solid ${props => props.theme.palette.primary.light};
  ${'' /* background-color: rgba(255, 255, 255, 0.8); */};
`;

export default Wrapper;
