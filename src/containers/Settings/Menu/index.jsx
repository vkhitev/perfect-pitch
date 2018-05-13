import {withRouter} from 'react-router-dom';
import {mapProps, compose} from 'recompose';

import MenuView from './MenuView';

const enhance = compose(
  withRouter,
  mapProps(props => ({
    currentPath: props.location.pathname,
  })),
);

export default enhance(MenuView);
