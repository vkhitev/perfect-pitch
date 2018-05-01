import React from 'react';

const tap = fn => Component => props => {
  fn(props, Component);
  return <Component {...props} />;
};

export default tap;
