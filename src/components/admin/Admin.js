import React, { useState, useEffect } from 'react';
// import Styles from './Styles.js';
// import AdminController from './controllers/Admin.js';
import TopBar from '../bars/TopBar.js';
import BottomBar from '../bars/BottomBar.js';
import Copyright from '../Copyright.js';
// import firebase from '../../firebase.js';

// Material UI
import {
  CssBaseline,
} from '@material-ui/core';

function Admin(){
  // const classes = Styles();
  const [animationClass] = useState('background-grad');
  // const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {

    }
    fetchData();
  }, []);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  //
  // const handleClose = () => {
  //   setOpen(false);
  // };

  return(
    <div className={animationClass}>
      <CssBaseline />
      <TopBar title="Admin"/>
      <main>

      </main>
      <BottomBar title=<Copyright color='secondary'/> />
    </div>
  );
}

export default Admin;
