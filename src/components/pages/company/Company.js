import React from 'react'
import Styles from './Styles.js';
import Header from './Header.js';
import Exemplar from './Exemplar';
import Features from './Features';
import About from './About';
import LatestNews from './LatestNews';
import SocialBrand from './SocialBrand';
import Footer from './Footer.js';
import TopBar from '../../bars/TopBar.js';

function Company(props) {
  const classes = Styles();
  const about = "We dedicated ourselves to create entertaining content so we can all learn from";

  return(
    <div className={classes.root} data-testid="company-container">
      <TopBar {...props}/>
      <Header title={"A Shark's Fishbowl"} text={about}/>
      <Exemplar />
      <Features />
      <About />
      <LatestNews />
      <SocialBrand />
      <Footer />
    </div>
  )
}
export default Company;
