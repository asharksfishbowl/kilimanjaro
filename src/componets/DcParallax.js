import React from 'react';
import Parallax from 'react-springy-parallax';

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

import ColoradoSprings from '../assets/images/ColoradoSprings.jpg';
import FallTrees from '../assets/images/FallTrees.jpg';
import SunNSpiderGrass from '../assets/images/SunNSpiderGrass.jpg';
import LauretzinGardensFlower from '../assets/images/LauretzinGardensFlower.jpg';
import Percy from '../assets/images/Percy.jpeg';

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
    background: 'black',
  },
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

function DcParallax(props) {
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
      <div className={classes.root}>
        <Parallax pages={13.5} className={classes.parallax}>

              <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" className={classes.title}>
                    Miguel Del Campo Photography
                  </Typography>
                  <Button color="inherit" className={classes.backButton} href="/">Back</Button>
                </Toolbar>
              </AppBar>

              <Toolbar id="back-to-top-anchor" />

              <Parallax.Layer
                  offset={0.1}
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

        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>

      </div>
    )
}

export default DcParallax;
