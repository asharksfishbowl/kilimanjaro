import React, { useState } from 'react';
import clsx from 'clsx';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  CssBaseline,
} from '@material-ui/core';

import {
  AccountCircle,
} from '@material-ui/icons';

import MenuIcon from '@material-ui/icons/Menu';

import AuthController from '../auth/controllers/Auth.js';
import LeftDrawer from '../drawers/LeftDrawer.js';
import TopStyles from './TopStyles.js';

function TopBar(props) {
    const classes = TopStyles();
    const [auth] = useState(AuthController.isLoggedIn());
    const [username] = useState(AuthController.getCurrentDisplayName());
    const [rightMenu, setRightMenu] = useState(null);
    const [leftDrawer, setLeftDrawer] = useState(null);
    const openMenu = Boolean(rightMenu);
    const openDrawer = Boolean(leftDrawer);

    const handleMenu = (event) => {
      setRightMenu(event.currentTarget);
    };

    const handleDrawer = (event) => {
      setLeftDrawer(event.currentTarget);
    };

    const handleClose = () => {
      setRightMenu(null);
      setLeftDrawer(null);
    };

    return(
      <div className={classes.root}>
        <CssBaseline />
          <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawer}
                className={clsx(classes.menuButton, openDrawer && classes.menuButtonHidden)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                {props.title}
              </Typography>
              {auth && (
              <div>
                {username}
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-TopBar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-TopBar"
                  anchorEl={rightMenu}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={openMenu}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </div>
            )}
            </Toolbar>
          </AppBar>
        <LeftDrawer open={openDrawer} handleDrawerClose={handleClose}/>
      </div>
    )
  }

export default TopBar;
