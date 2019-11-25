import React from 'react';
import Parallax from 'react-springy-parallax';
import { makeStyles } from '@material-ui/core/styles';

import Img from 'react-image';
import AspectRatio from 'react-aspect-ratio';

import ColoradoSprings from '../assets/images/ColoradoSprings.jpg';
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
        background:'black',
   };

    return(
      <Parallax pages={12} className={classes.parallax}>

            <Parallax.Layer
                offset={0}
                speed={0.5}
                style={styles}
            >
            <AspectRatio ratio="1/8">
              <Img src={ColoradoSprings} />
            </AspectRatio>
            </Parallax.Layer>

            <Parallax.Layer
                offset={2}
                speed={-0.1}
                style={styles}
            >
            <AspectRatio ratio="1/2">
              <Img src={Miguel2} />
            </AspectRatio>
            </Parallax.Layer>

            <Parallax.Layer
                offset={4}
                speed={0.5}
                style={styles}
            >
            <AspectRatio ratio="350/440">
              <Img src={Miguel3} />
            </AspectRatio>
            </Parallax.Layer>

            <Parallax.Layer
                offset={6}
                speed={0.5}
                style={styles}
            >
            <AspectRatio ratio="1/4">
              <Img src={Miguel4} />
            </AspectRatio>
            </Parallax.Layer>

      </Parallax>
    )
}

export default DcParallax;
