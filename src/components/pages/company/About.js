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
  const aboutUs = "We are a studio that aims to give our clients a platform that exemplifies a good user experience...";

  return (
    <section id="about" className={classes.about}>
      <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h4" align="left">
                ASF Studios
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Typography variant="overline" align="left">
                {aboutUs}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className={classes.stats}>
              <div className={classes.stat}>
                <Typography variant="h2" className={classes.counter}>
                  123
                </Typography>
                <p className="grey-text darken-1">coders maimed</p>
              </div>
              <div className={classes.stat}>
                <Typography variant="h2" className={classes.counter}>
                  123
                </Typography>
                <p className="grey-text darken-1">fresh pots of coffee</p>
              </div>
              <div className={classes.stat}>
                <Typography variant="h2" className={classes.counter}>
                  123
                </Typography>
                <p className="grey-text lighten-1">pounds gnar shredded</p>
              </div>
              <div className={classes.stat}>
                <Typography variant="h2" className={classes.counter}>
                  0
                </Typography>
                <p className="grey-text darken-1">honeybadgers harmed</p>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="overline" align="left">
                Along with a conservative dose of personality.
              </Typography>
            </Grid>
          </Grid>
      </Container>
    </section>
  );
};

export default About;
