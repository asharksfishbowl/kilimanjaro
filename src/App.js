// Import React
import React, { useState, useEffect } from 'react';

// Import Firebase
// import firebase from './firebase.js';
import Auth from './componets/auth/controllers/Auth.js';

// Import Rounting
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Parallax Links
import DcParallax from './componets/DcParallax.js';
import LrParallax from './componets/LrParallax.js';
import NmParallax from './componets/NmParallax.js';

// Componet Links
import Home from './componets/home/Home.js';
import Founders from './componets/founders/Founders.js';
import Dashboard from './componets/dashboard/Dashboard.js';
import UserProfile from './componets/profile/UserProfile.js';
import SoftwareCreation from './componets/software/SoftwareCreation.js';
// import MusicCreation from './componets/MusicCreation.js';
// import VideoCreation from './componets/VideoCreation.js';
// import MakerCreation from './componets/MakerCreation.js';
import PreciousPlastic from './componets/preciousplastic/PreciousPlastic.js';

// Helper Componets
import Underconstruction from './componets/Underconstruction.js';

// Login Screens
import SignInSide from './componets/auth/SignInSide.js';
import SignIn from './componets/auth/SignIn.js';
import SignUp from './componets/auth/SignUp.js';

// import Material UI
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { easings } from 'react-animation';
import { CoffeeLoading } from 'react-loadingg';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f8bbd0',
    },
    secondary: {
      main: '#ba68c8',
    },
  },
});

function App() {

  const [animationClass] = useState('background-grad');
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    Auth.isInitialized().then(value => {
      setFirebaseInitialized(value);
    })
  });

  return firebaseInitialized !== false ? (
      <MuiThemeProvider theme={theme}>
  		<CssBaseline />
        <Router>
          <div>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/Founders">
                <Founders />
              </Route>
              <Route path="/DcParallax">
                <DcParallax />
              </Route>
              <Route path="/LrParallax">
                <LrParallax />
              </Route>
              <Route path="/NmParallax" >
                <NmParallax />
              </Route>
              <Route path="/UserProfile" >
                <UserProfile />
              </Route>
              <Route path="/SoftwareCreation" >
                <SoftwareCreation />
              </Route>
              <Route path="/SignInSide" >
                <SignInSide />
              </Route>
              <Route path="/SignIn" >
                <SignIn />
              </Route>
              <Route path="/SignUp" >
                <SignUp />
              </Route>
              <Route path="/Dashboard" >
                <Dashboard />
              </Route>
              <Route path="/PreciousPlastic" >
                <PreciousPlastic />
              </Route>
              <Route path="/MusicCreation" >
                <Underconstruction />
              </Route>
              <Route path="/VideoCreation" >
                <Underconstruction />
              </Route>
              <Route path="/MakerCreation" >
                <Underconstruction />
              </Route>
              <Route path='/trololo' component={() => {
                   window.location.href = 'https://www.youtube.com/watch?v=2Z4m4lnjxkY';
                   return null;
              }}/>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
  ) :
  <div id="loader" className={animationClass} style={{animation: easings.easeInSine}}>
      <CoffeeLoading />
  </div>
}

export default App;
