
import React from 'react';
import Parallax from 'react-springy-parallax';
import AnimatedBg from "react-animated-bg";


// Material UI Componets
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

import Img from 'react-image';
import AspectRatio from 'react-aspect-ratio';
import '../assets/css/AspectRatio.css';

import Butterflies from '../assets/images/Butterflies.jpeg';
import Supermario from '../assets/images/Supermario.jpeg';
import Thedoctors from '../assets/images/Thedoctors.jpeg';
import Vegeta from '../assets/images/Vegeta.jpeg';
import GreenArrow from '../assets/images/Green Arrow.jpeg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar:{
    zIndex:1
  },
  fabButton:{
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    zIndex:1
  },
  backButton:{
    zIndex:1
  },
  title: {
    flexGrow: 1,
  },
  parallax: {
    background:'transparent',
  },
  aspectRatio: {
    zIndex:1000
  }
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger  = useScrollTrigger(window);
  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

function LrParallax(props) {
    const classes = useStyles();
    const styles = {
        fontFamily: 'Menlo-Regular, Menlo, monospace',
        fontSize: 14,
        lineHeight: '10px',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:'transparent'
    };

    const images = [
      {image:Butterflies, offset:0.25},
      {image:Thedoctors, offset:1.25},
      {image:Vegeta, offset:2},
      {image:GreenArrow, offset:3},
      {image:Supermario, offset:3.95}
    ];

    return(
      <div className={classes.root}>
        <Parallax pages={images.length} className="background-grad">
              <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" className={classes.title}>
                    Lea Rodarte Photography
                  </Typography>
                  <Button color="inherit" className={classes.backButton} href="/">Back</Button>
                </Toolbar>
              </AppBar>

              <AnimatedBg
                colors={["red", "purle", "blue"]}
                duration={10}
                delay={4}
                timingFunction="ease-out"
              >
                {images.map((image, index) => (
                  <Parallax.Layer
                      offset={image.offset}
                      speed={0.5}
                      style={styles}
                  >

                      <AspectRatio ratio="1" className={classes.aspectRatio}>
                        <Img src={image.image} />
                      </AspectRatio>
                  </Parallax.Layer>
                 ))}
               </AnimatedBg>

        </Parallax>

        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>

      </div>
    )
}

export default LrParallax;
