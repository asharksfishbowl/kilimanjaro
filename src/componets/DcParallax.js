import React from 'react';
import Parallax from 'react-springy-parallax';
import { makeStyles } from '@material-ui/core/styles';

import Miguel1 from '../assets/images/Miguel1.jpg';
import Miguel2 from '../assets/images/Miguel2.jpg';
import Miguel3 from '../assets/images/Miguel3.jpg';
import Miguel4 from '../assets/images/Miguel4.jpg';

const useStyles = makeStyles(theme => ({
  parallax: {
    background: 'black'
  }
}));

function DcParallax() {
    const classes = useStyles();
    const styles = {
        fontFamily: 'Menlo-Regular, Menlo, monospace',
        fontSize: 14,
        lineHeight: '10px',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:'black'
    };
    return(
      <Parallax pages={4} className={classes.parallax}>

            <Parallax.Layer
                offset={0}
                speed={0.5}
                style={styles}
            >
                <img src={Miguel1} height="100%" width="66%" alt="" />
            </Parallax.Layer>

            <Parallax.Layer
                offset={1}
                speed={-0.1}
                style={styles}
            >
                <img src={Miguel2} height="100%" width="66%" alt="" />
            </Parallax.Layer>

            <Parallax.Layer
                offset={2}
                speed={0.5}
                style={styles}
            >
                <img src={Miguel3} height="100%" width="66%" alt="" />
            </Parallax.Layer>

            <Parallax.Layer
                offset={3}
                speed={0.5}
                style={styles}
            >
                <img src={Miguel4} height="100%" width="66%" alt="" />
            </Parallax.Layer>

      </Parallax>
    )
}

export default DcParallax;
