import React from 'react';
import Styles from './Styles.js';

const SocialBrand = () => {
  const classes = Styles();

  return (
    <section id="social" className={classes.socialBrand}>
      <h1 className={classes.h1}>
        <a href="/" className={classes.brandLogo}>Logo</a>
      </h1>
      <p className={classes.p}>
        We believe in Simple, Creative & Flexible Design Standards.
      </p>
      <p className={classes.p}>
        Add a contact form here
      </p>
    </section>
  );
};

export default SocialBrand;
