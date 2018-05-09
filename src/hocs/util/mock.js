import {lifecycle} from 'recompose';

const withMock = (defaultValue, shape, timeout = 1000) =>
  lifecycle({
    componentWillMount() {
      this.setState(defaultValue);
      setTimeout(() => {
        this.setState(shape);
      }, timeout);
    },
  });

export default withMock;
