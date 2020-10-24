import React from 'react';
import { useHistory } from "react-router-dom";
import Styles from './Styles.js';
import MainList from './MainList.js';
import SecondaryList from './SecondaryList.js';

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

  const selectItem = (item) => {
    history.push("/" + item);
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
