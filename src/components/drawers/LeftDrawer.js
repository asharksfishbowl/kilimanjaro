import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Styles from './Styles.js';
import MainList from './MainList.js';
import SecondaryList from './SecondaryList.js';
import AuthController from '../auth/controllers/Auth.js';

// Material UI
import {
  Drawer,
  Divider,
  IconButton,
} from '@material-ui/core';

import {
  ChevronLeft,
} from '@material-ui/icons';

function LeftDrawer(props) {
  const classes = Styles();
  let history = useHistory();
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const checkAuth = async () => setAuth(AuthController.isLoggedIn());
    checkAuth();
  });

  const selectItem = (item) => {
    if (item == 'dashboard' && !auth) {
      history.push("/SignInSide");
    }
    else {
      history.push("/" + item);
    }


  };

  return(
    <Drawer
        anchor="left"
        open={props.open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={props.handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <MainList selectItem={selectItem}/>
        <Divider />
        <SecondaryList selectItem={selectItem}/>
    </Drawer>
  )
}
export default LeftDrawer;
