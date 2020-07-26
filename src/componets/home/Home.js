import React, { useState } from 'react';
import Logo from '../../logo.jpg';
import Welcome from './assets/Welcome.png';
import HomeController from './controllers/Home.js';
import '../../App.css';
import 'typeface-roboto';
import Img from 'react-image';
import Styles from './Styles.js';
import IconBar from './IconBar.js';
import Copyright from '../Copyright.js';
import Paypal from '../donations/PayPal.js';

// Material UI Componets
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function Home() {
    const classes = Styles();
    const [animationClass] = useState('background-grad');

    return (
      <div className={animationClass}>
        <div className="App">
          <div className="App-center">
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
            <Paypal className="App-donate-btn"/>
          </div>
          <IconBar/>
          <Copyright/>
        </div>
      </div>
    );

}

export default Home;
