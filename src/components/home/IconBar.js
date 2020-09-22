import React from 'react';
import '../../App.css';
import 'typeface-roboto';
import Styles from './Styles.js';

// Material UI Componets
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

// TODO: Make likes database driven
function IconBar() {
    const classes = Styles();
    return (
      <div className="App-link">
        <IconButton className={classes().iconButton} aria-label="YouTube">
          <Link rel="stylesheet" href="https://www.youtube.com/channel/UCMem0Pu1NybZ8FRrvLDGkoA?view_as=subscriber">
            <YouTubeIcon color="primary" fontSize="inherit"/>
          </Link>
        </IconButton>
        <IconButton className={classes().iconButton} aria-label="Facebook">
          <Link rel="stylesheet" href="https://www.facebook.com/asharksfishbowl/?fref=gs&dti=462102767518969&hc_location=group_dialog">
            <FacebookIcon color="primary" fontSize="inherit"/>
          </Link>
        </IconButton>
        <IconButton className={classes().iconButton} aria-label="Instagram">
          <Link rel="stylesheet" href="https://www.instagram.com/asharksfishbowl/">
            <InstagramIcon color="primary" fontSize="inherit"/>
          </Link>
        </IconButton>
        <IconButton className={classes().iconButton} aria-label="LinkedIn">
          <Link rel="stylesheet" href="https://www.linkedin.com/in/nick-marino-738861b0/">
            <LinkedInIcon color="primary" fontSize="inherit"/>
          </Link>
        </IconButton>
        <IconButton className={classes().iconButton} aria-label="Twitter">
          <Link rel="stylesheet" href="https://twitter.com/asharksfishbowl">
            <TwitterIcon color="primary" fontSize="inherit"/>
          </Link>
        </IconButton>
        <IconButton className={classes().iconButton} aria-label="GitHub">
          <Link rel="stylesheet" href="https://github.com/asharksfishbowl">
            <GitHubIcon color="primary" fontSize="inherit"/>
          </Link>
        </IconButton>
      </div>
    );
}

export default IconBar;
