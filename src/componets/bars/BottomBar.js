import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import BottomStyles from './BottomStyles.js';

function BottomBar(props) {
    const classes = BottomStyles();

    return(
      <AppBar position="fixed" color="primary" className={classes().appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes().menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes().title}>
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }

export default BottomBar;
