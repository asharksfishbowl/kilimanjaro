import React, { useState } from 'react';
import Logo from '../../logo.jpg';
import Welcome from './assets/Welcome.png';
import HomeController from './controllers/Home.js';
import '../../App.css';
import 'typeface-roboto';
import Img from 'react-image';
import Styles from './Styles.js';
import IconBar from './IconBar.js';

// Material UI Componets
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { animations } from 'react-animation';

function Home() {
    const classes = Styles();
    const [animationClass] = useState('background-grad');

    return (
      <div className={animationClass}>
        <div className="App">
          <div className="App-center">
            <Img src={Logo} className="App-logo" alt="logo" />
            <Img src={Welcome} className="App-welcome" alt="welcome" style={{animation: animations.slideDown}}/>
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
          <IconBar/>
        </div>
      </div>
    );

}

export default Home;
