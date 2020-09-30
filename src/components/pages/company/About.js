import React from 'react';
import Styles from './Styles.js';

const About = () => {
  const classes = Styles();

  return (
    <section id="about" className={classes.about}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className="col m6">
            <h3 className={classes.h1}>
              Bogus Studio
            </h3>
            <p className={classes.p}>
              We are a studio that aims to give our clients a platform that exemplifies a good user experience...
            </p>
          </div>
          <div className="col m6">
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
          </div>
        </div>
        <div className={classes.row}>
          <p>Along with a conservative dose of personality.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
