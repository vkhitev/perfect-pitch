import styled from 'styled-components';
import {darken} from 'polished';
import Typography from 'material-ui/Typography';

const ExternalLink = styled(Typography).attrs({
  variant: 'subheading',
  component: 'a',
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  text-decoration: none;
  color: #20a6e7;

  :hover {
    color: ${darken(0.2, '#20A6E7')};
  }
`;

export default ExternalLink;
