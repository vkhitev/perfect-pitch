import React from 'react';
import PropTypes from 'prop-types';
import {compose, withHandlers, withStateHandlers} from 'recompose';
import styled from 'styled-components';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import {withTheme} from 'material-ui/styles';
import CloseIcon from '@material-ui/icons/Close';
import {tail} from 'ramda';

import omitProps from './util/omitProps';

const CloseButton = withTheme()(styled(IconButton).attrs({
  'aria-label': 'Close',
  color: 'inherit',
})`
  width: ${props => props.theme.spacing.unit * 4};
  height: ${props => props.theme.spacing.unit * 4};
`);

const wrapWithSnackbar = Component => {
  const ComponentWithSnackBar = ({
    messageInfo,
    open,
    handleClose,
    processQueue,
    ...rest
  }) => (
    <React.Fragment>
      <Component {...rest} />
      <Snackbar
        key={messageInfo.key}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={messageInfo.duration}
        onClose={handleClose}
        onExited={processQueue}
        SnackbarContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{messageInfo.message}</span>}
        action={[
          <CloseButton key="close" onClick={handleClose}>
            <CloseIcon />
          </CloseButton>,
        ]}
      />
    </React.Fragment>
  );

  ComponentWithSnackBar.propTypes = {
    messageInfo: PropTypes.shape({
      key: PropTypes.number,
      duration: PropTypes.number,
      message: PropTypes.string,
    }).isRequired,
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    processQueue: PropTypes.func.isRequired,
  };

  return ComponentWithSnackBar;
};

const withNotifications = compose(
  withStateHandlers(
    {
      open: false,
      messageInfo: {},
      queue: [],
    },
    {
      addEvent: state => event => ({
        queue: [...state.queue, event],
      }),

      close: () => () => ({
        open: false,
      }),

      processQueue: state => () => {
        if (state.queue.length > 0) {
          return {
            messageInfo: state.queue[0],
            open: true,
            queue: tail(state.queue),
          };
        }
        return null;
      },
    },
  ),

  withHandlers({
    handleClose: props => (event, reason) => {
      if (reason !== 'clickaway') {
        props.close();
      }
    },

    showNotification: props => (message, duration = 60 * 1000) => {
      props.addEvent({
        message,
        duration,
        key: new Date().getTime(),
      });

      if (props.open) {
        props.close();
      } else {
        props.processQueue();
      }
    },
  }),

  wrapWithSnackbar,

  omitProps([
    'open',
    'messageInfo',
    'queue',
    'addEvent',
    'close',
    'processQueue',
    'handleClose',
  ]),
);

export default withNotifications;
