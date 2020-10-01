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
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.row}>
          <Grid xs={12} sm={4} md={6}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Bogus Studio
            </Typography>
            <Typography component="p" variant="p" align="center" color="textPrimary" gutterBottom>
              We are a studio that aims to give our clients a platform that exemplifies a good user experience...
            </Typography>
          </Grid>
          <Grid xs={12} sm={4} md={6}>
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
        </div>
        <div className={classes.row}>
          <p>Along with a conservative dose of personality.</p>
        </div>
      </Container>
    </section>
  );
};

export default About;
