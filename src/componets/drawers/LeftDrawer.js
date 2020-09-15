import React from 'react';
import clsx from 'clsx';
import Styles from './Styles.js';
import { mainListItems, secondaryListItems } from './ListItems.js';

// Material UI
import {
  Drawer,
  Divider,
  List,
  IconButton,
} from '@material-ui/core';

import {
  ChevronLeft,
} from '@material-ui/icons';

function LeftDrawer(props) {
  const classes = Styles();

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
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
    </Drawer>
  )
}
export default LeftDrawer;
