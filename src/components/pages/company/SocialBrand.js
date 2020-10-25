import React from 'react';
import Styles from './Styles.js';
import Img from 'react-image';
import Logo from '../../../assets/images/ASF/Howdy.jpg';
import Contact from '../../contact/Contact.js';

// Material UI
import {
  Typography,
  Grid,
  Container,
} from '@material-ui/core';

const SocialBrand = () => {
  const classes = Styles();
  const moto = "We believe in Simple, Creative & Flexible Design Standards.";

  return (
    <section id="social" className={classes.socialBrand} data-testid="social">
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Img src={Logo} height="100%" width="100%" alt="Logo" className={classes.logo}/>
          </Grid>
          <Grid item xs={12} align="left">
            <Typography variant="h6">
              {moto}
            </Typography>
          </Grid>
          <Grid item xs={12} align="right">
            <Contact />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default SocialBrand;
