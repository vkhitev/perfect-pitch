import React from 'react';

export default function rewireLink(Component) {
  Component.__Rewire__('Link', props => {
    const NewComponent = 'a';
    return React.createElement(NewComponent, props);
  });
}
