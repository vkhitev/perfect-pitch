import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {ListItemIcon, ListItemText, ListSubheader} from 'material-ui/List';
import {MenuList, MenuItem} from 'material-ui/Menu';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import SecurityIcon from '@material-ui/icons/Security';
import NotificationsIcon from '@material-ui/icons/Notifications';

import Paper from 'ui/Paper';
import {SETTINGS} from 'constants/routes';

const MENU_ITEMS = [
  {
    name: 'Account',
    path: SETTINGS.ACCOUNT,
    Icon: AccountCircleIcon,
  },
  {
    name: 'Profile',
    path: SETTINGS.PROFILE,
    Icon: VerifiedUserIcon,
  },
  {
    name: 'Password',
    path: SETTINGS.PASSWORD,
    Icon: SecurityIcon,
  },
  {
    name: 'Notifications',
    path: SETTINGS.NOTIFICATIONS,
    Icon: NotificationsIcon,
  },
];

const MenuView = props => (
  <Paper>
    <MenuList
      subheader={<ListSubheader>Settings</ListSubheader>}
      component="nav"
    >
      {MENU_ITEMS.map(item => (
        <MenuItem
          selected={props.currentPath === item.path}
          key={item.path}
          button
          component={Link}
          to={item.path}
        >
          <ListItemIcon>
            <item.Icon />
          </ListItemIcon>
          <ListItemText primary={item.name} />
        </MenuItem>
      ))}
    </MenuList>
  </Paper>
);

MenuView.propTypes = {
  currentPath: PropTypes.string.isRequired,
};

export default MenuView;
