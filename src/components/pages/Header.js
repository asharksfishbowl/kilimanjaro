import React from 'react'
import Styles from './Styles.js';

function Header(props) {
  const classes = Styles();

  return(
    <header className={classes.header}>
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
