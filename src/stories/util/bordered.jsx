import React from 'react';
import styled from 'styled-components';

const Bordered = styled.div`
  border: 1px dashed gray;
`;

const bordered = storyFn => <Bordered>{storyFn()}</Bordered>;

export default bordered;
