import React from 'react'
import Styles from './Styles.js';
import Copyright from '../../Copyright.js';

function Footer(props) {
  const classes = Styles();

  return(
    <footer className={classes.footer} data-testid="footer">
      <Copyright color='secondary'/>
    </footer>
  )
}
export default Footer;
