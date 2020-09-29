import React from 'react'
import Styles from './Styles.js';
import Header from './Header.js';
import Foooter from './Footer.js';

import {
  Divider,
  Container,
  Typography
} from '@material-ui/core';

function Company(props) {
  const classes = Styles();
  // TODO: Make these dynamic
  const about = "We are a company of creating beautiful and elegant websites";

  return(
    <div className={classes.root}>
      <Header title={"A Shark's Fishbowl"} text={about}/>
      <Divider variant="middle" />
      <div className={classes.heroContent}>
        Hero div stuff here
      </div>
      <Divider variant="middle" />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Sticky footer
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Pin a footer to the bottom of the viewport.'}
          {'The footer will move as the main element of the page grows.'}
        </Typography>
        <Typography variant="body1">Sticky footer placeholder.</Typography>
      </Container>
      <Divider variant="middle" />
      <div className={classes.heroContent}>
        Hero div stuff here
      </div>
      <div>
        Bios here
      </div>
      <Divider variant="middle" />
      <Foooter />
    </div>
  )
}
export default Company;
