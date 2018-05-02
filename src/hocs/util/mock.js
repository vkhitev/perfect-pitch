import {lifecycle} from 'recompose';
import {map} from 'ramda';

const withMock = (shape, timeout = 1000) =>
  lifecycle({
    componentWillMount() {
      this.setState(map(() => undefined, shape));
      setTimeout(() => {
        this.setState(shape);
      }, timeout);
    },
  });

export default withMock;
