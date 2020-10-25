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
    <Container className={classes.header} maxWidth="lg" data-testid="header">
      <ParticlesBg type="square" num={200} bg={true} className={classes.particleBg}/>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Typography variant="h2" align="center" color="primary" className={classes.headerTitle}>
            {props.title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" color="primary" className={classes.headerText}>
            {props.text}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
export default Header;
