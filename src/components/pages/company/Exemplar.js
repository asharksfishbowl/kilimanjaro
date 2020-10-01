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
      <Container>
        <Grid>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Modern Custom Websites
          </Typography>
          <Typography component="p" variant="h5" align="center" color="textPrimary" gutterBottom>
            We use a modern technology stack to build fast, responsive, single page web applications.
          </Typography>
          <Img src={SignInImg} alt="sprint Img"/>
        </Grid>
      </Container>
    </section>
  );
};

export default Exemplar;
