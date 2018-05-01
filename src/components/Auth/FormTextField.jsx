import React from 'react';
import PropTypes from 'prop-types';
import {compose, setPropTypes, defaultProps} from 'recompose';
import TextField from 'material-ui/TextField';

export default compose(
  setPropTypes({
    value: PropTypes.string,
    pristine: PropTypes.bool,
  }),
  defaultProps({
    value: '',
    pristine: true,
  }),
)(({value, pristine, ...rest}) => (
  <TextField
    {...rest}
    fullWidth
    margin="normal"
    required
    value={value}
    error={!value && !pristine}
    helperText={value || pristine ? '' : 'Field is required'}
  />
));
