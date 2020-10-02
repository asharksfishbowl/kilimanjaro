import React from 'react';
import Styles from './Styles.js';

// Material UI
import {
  Typography,
  Grid,
  Container,
} from '@material-ui/core';

const About = () => {
  const classes = Styles();

  return (
    <section id="about" className={classes.about}>
      <Container maxWidth="lg">
          <Grid container spacing={10}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h2" align="left" color="textPrimary" gutterBottom>
                ASF Studios
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="caption" align="center" color="textPrimary" gutterBottom>
                We are a studio that aims to give our clients a platform that exemplifies a good user experience...
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.stats}>
                <div className={classes.stat}>
                  <h2 className={classes.counter}>123</h2>
                  <p className="grey-text darken-1">coders maimed</p>
                </div>
                <div className={classes.stat}>
                  <h2 className={classes.counter}>123</h2>
                  <p className="grey-text darken-1">fresh pots of coffee</p>
                </div>
                <div className={classes.stat}>
                  <h2 className={classes.counter}>123</h2>
                  <p className="grey-text lighten-1">pounds gnar shredded</p>
                </div>
                <div className={classes.stat}>
                  <h2 className={classes.counter}>0</h2>
                  <p className="grey-text darken-1">honeybadgers harmed</p>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6} md={4}>
              <p>Along with a conservative dose of personality.</p>
            </Grid>
          </Grid>
      </Container>
    </section>
  );
};

export default About;
