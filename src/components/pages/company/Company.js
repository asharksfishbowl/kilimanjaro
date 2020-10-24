import React, { useEffect } from 'react';
import Styles from './Styles.js';
import Header from './Header.js';
import Exemplar from './Exemplar';
import Features from './Features';
import About from './About';
import LatestNews from './LatestNews';
import SocialBrand from './SocialBrand';
import Footer from './Footer.js';
import TopBar from '../../bars/TopBar.js';

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    pin: true,
    pinSpacing: false
  });
});


ScrollTrigger.create({
  snap: 1 / 4 // snap whole page to the closest section!
});

function Company(props) {
  const classes = Styles();
  const about = "We dedicated ourselves to create entertaining content we can all learn from";

  useEffect(() => {

  }, []);

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
