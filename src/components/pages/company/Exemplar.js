import React from 'react';
import Styles from './Styles.js';
import sprintboard from '../../../assets/images/Oopseis.jpg';

const Exemplar = () => {
  const classes = Styles();

  return (
    <section id="examplar" className={classes.exemplar}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className="col l1"></div>
          <div className="col l10 center-align">
            <h1>Modern Custom Websites</h1>
            <p>We use a modern technology stack to build fast, responsive, single page web applications.</p>
            <img className="responsive-img" src={sprintboard} alt="sprint Img"/>
          </div>
          <div className="col l1"></div>
        </div>
      </div>
    </section>
  );
};

export default Exemplar;
