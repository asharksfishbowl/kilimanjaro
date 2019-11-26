import React from 'react';
import Parallax from 'react-springy-parallax';
import { makeStyles } from '@material-ui/core/styles';

import Img from 'react-image';
import AspectRatio from 'react-aspect-ratio';
import '../assets/css/AspectRatio.css';

import ColoradoSprings from '../assets/images/ColoradoSprings.jpg';
import FallTrees from '../assets/images/FallTrees.jpg';
import SunNSpiderGrass from '../assets/images/SunNSpiderGrass.jpg';
import LauretzinGardensFlower from '../assets/images/LauretzinGardensFlower.jpg';
import Percy from '../assets/images/Percy.jpeg';

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
      <Parallax pages={12.5} className={classes.parallax}>

            <Parallax.Layer
                offset={0}
                speed={0.5}
                style={styles}
            >
            <AspectRatio ratio="1">
              <Img src={ColoradoSprings} />
            </AspectRatio>
            </Parallax.Layer>

            <Parallax.Layer
                offset={1}
                speed={0.5}
                style={styles}
            >
              <AspectRatio ratio="1">
                <Img src={FallTrees} />
              </AspectRatio>
            </Parallax.Layer>

            <Parallax.Layer
                offset={2.75}
                speed={0.5}
                style={styles}
            >
              <AspectRatio ratio="1" >
                <Img src={SunNSpiderGrass} />
              </AspectRatio>
            </Parallax.Layer>

            <Parallax.Layer
                offset={4}
                speed={0.5}
                style={styles}
            >
              <AspectRatio ratio="1">
                <Img src={LauretzinGardensFlower} />
              </AspectRatio>
            </Parallax.Layer>

            <Parallax.Layer
                offset={5.25}
                speed={0.5}
                style={styles}
            >
              <AspectRatio ratio="1">
                <Img src={Percy} />

              </AspectRatio>
            </Parallax.Layer>

      </Parallax>
    )
}

export default DcParallax;
