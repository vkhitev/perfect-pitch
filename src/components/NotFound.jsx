import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import Centered from 'components/Centered';
import {HOME} from 'constants/routes';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Message = styled(Typography)`
  margin-bottom: 30px;
`;

const NotFoundPage = () => (
  <Centered>
    <Wrapper>
      <Message color="secondary" variant="display4">
        404
      </Message>

      <Message variant="display1">
        Oops, the page you&#39;re looking for doesn&#39;t exist.
      </Message>

      <Button
        variant="raised"
        size="large"
        color="secondary"
        component={Link}
        to={HOME}
      >
        Go to homepage
      </Button>
    </Wrapper>
  </Centered>
);

export default NotFoundPage;
