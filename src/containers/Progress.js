import {compose, withProps} from 'recompose';
import {connect} from 'react-redux';

import Progress from 'components/Secondary/Progress';
import withMock from 'hocs/util/mock';

const enhance = compose(
  connect(state => ({
    data: state,
  })),
  withProps(props => {
    console.log(props);
  }),
  withMock({
    value: 49,
  }),
);

export default enhance(Progress);
