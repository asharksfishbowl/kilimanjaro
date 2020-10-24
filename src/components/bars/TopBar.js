import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import clsx from 'clsx';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
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
    const [username] = useState(AuthController.getCurrentDisplayName());
    const [auth, setAuth] = useState(false);
    const [rightMenu, setRightMenu] = useState(null);
    const [leftDrawer, setLeftDrawer] = useState(null);
    const openMenu = Boolean(rightMenu);
    const openDrawer = Boolean(leftDrawer);
    let history = useHistory();

    useEffect(() => {
      const checkAuth = async () => setAuth(AuthController.isLoggedIn());
      checkAuth();
    });

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

    const showProfile = () => {
      handleClose();
      history.push('/profile');
    };

    const handleLogout = () => {
      setRightMenu(null);
      setAuth(null);
      AuthController.logout();
      history.push('/company');
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
              <Typography variant="h6" color="inherit" className={classes.title}>
                {auth ? username : props.title}
              </Typography>
              {auth ?
                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-TopBar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                    className={classes.username}
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
                    <MenuItem onClick={showProfile}>Profile</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </div>
                :
                <Button href="/SignInSide">
                  Login
                </Button>
              }
            </Toolbar>
          </AppBar>
        <LeftDrawer open={openDrawer} handleDrawerClose={handleClose}/>
      </div>
    )
  }

export default TopBar;
