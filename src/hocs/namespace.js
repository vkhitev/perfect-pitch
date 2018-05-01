import {compose, withProps, mapProps} from 'recompose';

const namespace = (name, ...hocs) =>
  compose(
    withProps(props => ({$parentProps: props})),
    ...hocs,
    mapProps(props => ({[name]: props, ...props.$parentProps})),
  );

export default namespace;
