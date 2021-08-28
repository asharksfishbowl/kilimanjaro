import React, { useEffect } from 'react';
import Styles from './Styles.js';
import Header from './Header.js';
import Exemplar from './Exemplar';
import Features from './Features';
import About from './About';
import CalculatorForm from '../../calculator/CalculatorForm';
import LatestNews from './LatestNews';
import SocialBrand from './SocialBrand';
import Footer from './Footer.js';
import TopBar from '../../bars/TopBar.js';

function Company(props) {
  const classes = Styles();
  const about = "We dedicated ourselves to create entertaining content we can all learn from";

  useEffect(() => {

  }, []);

  return(
    <div className={classes.root} data-testid="company">
      <TopBar {...props} />
      <Header title={"A Shark's Fishbowl"} text={about}/>
      <Exemplar />
      <Features />
      <About />
      <CalculatorForm />
      <LatestNews />
      <SocialBrand />
      <Footer />
    </div>
  )
}
export default Company;
