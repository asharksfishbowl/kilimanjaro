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
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

function Home() {
    const classes = Styles();
    const [animationClass] = useState('background-grad');
    const [open, setOpen] = useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(true);
      HomeController.helloWorld(handleClose);
    };

    return (
      <div className={animationClass}>
        <Backdrop className={classes().backdrop} open={open}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <div className="App">
          <div className="App-center">
            <Img src={Logo} className="App-logo" alt="logo" />
            <Img src={Welcome} className="App-welcome" alt="welcome" />
          </div>

          <Typography variant="overline">
            Here in the Fishbowl is knowledge <br />
            Join in the swim if ya like :)
          </Typography>

          <div className={classes().listCenter}>
            <Button variant="contained" className={classes().button} size="large" href="/SignInSide">
              Sign In
            </Button>
            <Button variant="contained" className={classes().button} size="large" href="/SignUp">
              Sign Up
            </Button>
            <Button variant="contained" className={classes().button} onClick={handleToggle} size="large" >
              Say Hello World
            </Button>
            <Button variant="contained" className={classes().button} size="large" href="/Founders">
              Founders
            </Button>
          </div>

          <div className="App-link">
            <Typography variant="overline">
              Donate if ya can :) <br />
              It's big help to keep these projects going :)
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
