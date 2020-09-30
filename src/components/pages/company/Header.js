import React from 'react'
import Styles from './Styles.js';
import ParticlesBg from 'particles-bg'

function Header(props) {
  const classes = Styles();

  return(
    <header className={classes.header}>
      <ParticlesBg type="lines" num={450} bg={true} />
      <span className={classes.headerTitle}>
        {props.title}
      </span>
      <br/>
      <span className={classes.headerText}>
        {props.text}
      </span>
    </header>
  )
}
export default Header;
