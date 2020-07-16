import React, { useState } from 'react';
import Logo from '../../logo.jpg';
import Welcome from './assets/Welcome.png';
import HomeController from './controllers/Home.js';
import '../../App.css';
import 'typeface-roboto';
import Img from 'react-image';
import Styles from './Styles.js';

// Material UI Componets
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';

import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

function Home() {
    const classes = Styles();
    const [animationClass] = useState('background-grad');

    return (
      <div className="App" >
        <header className={animationClass}>

          <div>
            <Img src={Logo} className="App-logo" alt="logo" />
            <Img src={Welcome} className="App-welcome" alt="welcome" />
          </div>

          <Typography variant="overline">
            I am going to be sharing my knowledge of creation soon! Sign up or Sign in for more :)
          </Typography>

          <div className={classes().listCenter}>
            <Button variant="contained" className={classes().button} size="large" href="/SignInSide">
              Sign In
            </Button>
            <Button variant="contained" className={classes().button} size="large" href="/SignUp">
              Sign Up
            </Button>
            <Button variant="contained" className={classes().button} onClick={HomeController.helloWorld} size="large" >
              Say Hello World
            </Button>
            <Button variant="contained" className={classes().button} size="large" href="/Founders">
              Founders
            </Button>
          </div>

          <div className="App-link">
            <Typography variant="overline">
              You don't have to donate but it's big help to keep these projects going :)
            </Typography>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="NMEW6UUZ4RB5L" />
              <Button className="App-donate-btn" variant="outlined" name="submit" type="submit" size="large">
                Donate
              </Button>
            </form>
          </div>

          <div className="App-link">
            <IconButton className={classes().iconButton} aria-label="YouTube">
              <Link rel="stylesheet" href="https://www.youtube.com/channel/UCMem0Pu1NybZ8FRrvLDGkoA?view_as=subscriber">
                <YouTubeIcon color="primary" />
              </Link>
            </IconButton>
            <IconButton className={classes().iconButton} aria-label="Facebook">
              <Link rel="stylesheet" href="https://www.facebook.com/asharksfishbowl/?fref=gs&dti=462102767518969&hc_location=group_dialog">
                <FacebookIcon color="primary" />
              </Link>
            </IconButton>
            <IconButton className={classes().iconButton} aria-label="Instagram">
              <Link rel="stylesheet" href="https://www.instagram.com/asharksfishbowl/">
                <InstagramIcon color="primary" />
              </Link>
            </IconButton>
            <IconButton className={classes().iconButton} aria-label="LinkedIn">
              <Link rel="stylesheet" href="https://www.linkedin.com/in/nick-marino-738861b0/">
                <LinkedInIcon color="primary" />
              </Link>
            </IconButton>
            <IconButton className={classes().iconButton} aria-label="Twitter">
              <Link rel="stylesheet" href="https://twitter.com/asharksfishbowl">
                <TwitterIcon color="primary" />
              </Link>
            </IconButton>
            <IconButton className={classes().iconButton} aria-label="GitHub">
              <Link rel="stylesheet" href="https://github.com/asharksfishbowl">
                <GitHubIcon color="primary" />
              </Link>
            </IconButton>
          </div>
        </header>
      </div>
    );

}

export default Home;
