import {compose, mapProps} from 'recompose';
import {omit} from 'ramda';

const omitProps = compose(mapProps, omit);

export default omitProps;
