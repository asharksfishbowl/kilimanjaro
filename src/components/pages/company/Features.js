import React from 'react';
import Styles from './Styles.js';

// Material UI
import {
  Typography,
  Grid,
  Container,
} from '@material-ui/core';

import {
  Create as CreateIcon,
  Devices as DevicesIcon,
  Build as BuildIcon,
  Mood as MoodIcon,
} from '@material-ui/icons';

const Features = () => {
  const classes = Styles();
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua. Ut enim!";
  const sellingPoint = "We worked out an amazing combination of vast functionality and user's comfort. It will totally impress you with its power!";

  return (
    <section id="features" className={classes.features}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Typography variant="h4">
              Features
            </Typography>
            <Typography variant="overline">
              {sellingPoint}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5">
              <CreateIcon /> Pixel-Perfect Design
            </Typography>
            <Typography variant="overline">
              {lorem}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5">
              <DevicesIcon /> Thoroughly Responsive
            </Typography>
            <Typography variant="overline">
              {lorem}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5">
              <BuildIcon /> Timely Support
            </Typography>
            <Typography variant="overline">
              {lorem}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5">
              <MoodIcon /> Happy Clients
            </Typography>
            <Typography variant="overline">
              {lorem}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Features;
