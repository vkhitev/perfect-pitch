import styled from 'styled-components';
import Paper from 'material-ui/Paper';

const Panel = styled(Paper)`
  width: ${props => props.width || '340px'};
  padding: 30px;
  margin: 0 20px;

  &:not(:last-of-type) {
    margin-bottom: 40px;
  }
`;

export default Panel;
