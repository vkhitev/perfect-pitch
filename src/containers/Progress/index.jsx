import React from 'react';
import {chain} from 'ramda';

import previews from 'fake/previews';

import ProgressView from './ProgressView';

class Progress extends React.Component {
  render() {
    const skills = chain(item => item.levelItems, previews);
    const total = skills.length;
    const passed = skills.filter(skill => skill.progress === 1).length;
    const value = Number((passed / total * 100).toFixed());

    return <ProgressView value={value} />;
  }
}

export default Progress;
