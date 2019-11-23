import React from 'react';
import logo from './logo.jpg';
import './App.css';
import 'typeface-roboto';

// Material UI Componets
import Link from '@material-ui/core/Link';
import ButtonBase from '@material-ui/core/ButtonBase';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

// Assets
import backgroundVideo from './assets/videos/Vision.mp4';
import MiguelDelCampoImg from './assets/images/MiguelDelCampo.jpg';
import LeaMeyerRodarteImg from './assets/images/LeaMeyerRodarte.jpg';
import NickSharkMarinoImg from './assets/images/NickSharkMarino.jpg';

const images = [{
    src: MiguelDelCampoImg,
    title: 'Miguel Del Campo Photography',
    width: '33%',
    height: '250px',
  },{
    src: LeaMeyerRodarteImg,
    title: 'Lea Meyer Rodarte Photography',
    width: '33%',
    height: '350px',
  },{
    src: NickSharkMarinoImg,
    title: 'Nick Shark Marino Photography',
    width: '33%',
    height: '325px',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    'z-index':1,
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  slider:{
    width:200,
    'z-index':1,
  },
  list:{
    'text-align':'left'
  },
  image: {
    position: 'relative',
    height: 150,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    height: '100%',
    width: '100%'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    var vid = document.getElementById("backgroundVideoDiv");
    if (newValue > 0) {
      vid.muted = false;
    }
    else {
      vid.muted = true;
    }
    vid.volume = newValue / 100;
    setValue(newValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Typography>
          <h1>A Shark's Fishbowl</h1>
          <h2>What's up Sharks!!!!! :)</h2>
          <p>
            I am going to be sharing my knowledge of creation soon :)
          </p>
          <h3>For Example</h3>
          <hr />
          <ul className={classes.list}>
            <li>Software Creation from basic link page to full on web app</li>
            <li>Music Creation from mixing to mastering a track</li>
            <li>Video and Photo creation from using a camera to editing</li>
          </ul>
          <h2>So let's get creating :)</h2>
        </Typography>


        <div className={classes.slider}>
          <Typography id="continuous-slider" gutterBottom>
            Slide to control Volume
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <VolumeDown />
            </Grid>
            <Grid item xs>
              <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
            </Grid>
            <Grid item>
              <VolumeUp />
            </Grid>
          </Grid>
        </div>

        <div className="App-link">
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="NMEW6UUZ4RB5L" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
          <Typography>
            You don't have to donate but it's big help to keep these projects going :)
          </Typography>
        </div>

        <div className="App-link">
          <IconButton className={classes.button} aria-label="YouTube">
            <Link rel="stylesheet" href="https://www.youtube.com/channel/UCMem0Pu1NybZ8FRrvLDGkoA?view_as=subscriber">
              <YouTubeIcon color="secondary" />
            </Link>
          </IconButton>
          <IconButton className={classes.button} aria-label="Facebook">
            <Link rel="stylesheet" href="https://www.facebook.com/asharksfishbowl/?fref=gs&dti=462102767518969&hc_location=group_dialog">
              <FacebookIcon color="secondary" />
            </Link>
          </IconButton>
          <IconButton className={classes.button} aria-label="Instagram">
            <Link rel="stylesheet" href="https://www.instagram.com/asharksfishbowl/">
              <InstagramIcon color="secondary" />
            </Link>
          </IconButton>
          <IconButton className={classes.button} aria-label="LinkedIn">
            <Link rel="stylesheet" href="https://www.linkedin.com/in/nick-marino-738861b0/">
              <LinkedInIcon color="secondary" />
            </Link>
          </IconButton>
          <IconButton className={classes.button} aria-label="Twitter">
            <Link rel="stylesheet" href="https://twitter.com/asharksfishbowl">
              <TwitterIcon color="secondary" />
            </Link>
          </IconButton>
          <IconButton className={classes.button} aria-label="GitHub">
            <Link rel="stylesheet" href="https://github.com/asharksfishbowl">
              <GitHubIcon color="secondary" />
            </Link>
          </IconButton>
        </div>

        <div className={classes.root}>
          {images.map(image => (
            <ButtonBase
              focusRipple
              key={image.title}
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: image.width,
                height: image.height
              }}
            >
              <img
                className={classes.imageSrc}
                src={image.src}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {image.title}
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </ButtonBase>
          ))}
        </div>

        <video id="backgroundVideoDiv" className='App-background-video' autoPlay loop muted>
            <source src={backgroundVideo} type='video/mp4' />
        </video>

      </header>
    </div>
  );
}

export default App;
