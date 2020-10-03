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
  const pixelText = "We create solutions that will meet every need down to the pixel whether it's web, app or native solutions.";
  const responsiveText = "Our responsive design will make your solution look great on all devices";
  const timelyText = "With our modern stack we can create test driven prototypes and meet the needs of today's technological demand";
  const clientsText = "We strive to make our clients happy by being transparent and direct to meet their every need.";
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
              {pixelText}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5">
              <DevicesIcon /> Thoroughly Responsive
            </Typography>
            <Typography variant="overline">
              {responsiveText}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5">
              <BuildIcon /> Timely Support
            </Typography>
            <Typography variant="overline">
              {timelyText}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5">
              <MoodIcon /> Happy Clients
            </Typography>
            <Typography variant="overline">
              {clientsText}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Features;
