import React from 'react'
import Styles from './Styles.js';
import ParticlesBg from 'particles-bg'

// Material UI
import {
  Typography,
  Grid,
  Container,
} from '@material-ui/core';

function Header(props) {
  const classes = Styles();

  return(
    <Container className={classes.header} maxWidth="lg">
      <ParticlesBg type="lines" num={450} bg={true} />
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Typography variant="h1" align="center" color="primary" className={classes.headerTitle}>
            {props.title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="overline" align="center" color="primary" className={classes.headerText}>
            {props.text}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
export default Header;
