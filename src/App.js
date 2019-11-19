import React from 'react';
import logo from './logo.jpg';
import './App.css';
import 'typeface-roboto';

// Material UI Componets
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
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

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  slider:{
    width:200,
    'z-index':1,
  }
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
          <h1>A Sharks's Fishbowl</h1>
          <p>
            What's up Sharks!!!!! <br />
            I am going to sharing my knowlegde of creation soon, for example<br />
            Software Creation from basic link page to full on web app<br />
            Music Creation from mixing to mastering a track<br />
            So let's get creating :)
          </p>
        </Typography>


        <div className={classes.slider}>
          <Typography id="continuous-slider" gutterBottom>
            Volume
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

        <video id="backgroundVideoDiv" className='App-background-video' autoPlay loop muted>
            <source src={backgroundVideo} type='video/mp4' />
        </video>
        
      </header>
    </div>
  );
}

export default App;
