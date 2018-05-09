import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OuterWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

const InnerWrapper = styled.div`
  margin: auto;
`;

const Centered = ({children, ...rest}) => (
  <OuterWrapper {...rest}>
    <InnerWrapper>{children}</InnerWrapper>
  </OuterWrapper>
);

Centered.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Centered;
