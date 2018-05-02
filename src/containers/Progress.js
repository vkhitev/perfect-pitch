import {compose} from 'recompose';
import {firestoreConnect} from 'react-redux-firebase';

import Progress from 'components/Secondary/Progress';
import withMock from 'hocs/util/mock';

const enhance = compose(
  firestoreConnect(['skills']),
  withMock({
    value: 49,
  }),
);

export default enhance(Progress);
