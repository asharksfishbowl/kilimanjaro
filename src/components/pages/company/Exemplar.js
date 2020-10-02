import React from 'react';
import Styles from './Styles.js';
import Img from 'react-image';
import SignInImg from '../../../assets/images/ASF/SignIn.png';

// Material UI
import {
  Typography,
  Grid,
  Container,
} from '@material-ui/core';

const Exemplar = () => {
  const classes = Styles();

  return (
    <section id="examplar" className={classes.exemplar}>
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography variant="overline">
              Modern Custom Websites
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="overline">
              We use a modern technology stack to build fast, responsive, single page web applications.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Img src={SignInImg} height="100%" width="100%" alt="sign in Img"/>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Exemplar;
