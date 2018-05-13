import {compose, withProps} from 'recompose';
import {chain} from 'ramda';

import Progress from 'components/Secondary/Progress';
import previews from 'fake/previews';

const enhance = compose(
  withProps(() => {
    const skills = chain(item => item.levelItems, previews);
    const total = skills.length;
    const passed = skills.filter(skill => skill.progress === 1).length;
    return {
      value: Number((passed / total * 100).toFixed()),
    };
  }),
);

export default enhance(Progress);
