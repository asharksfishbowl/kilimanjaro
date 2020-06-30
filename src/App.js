// Import React
import React, { useState, useEffect } from 'react';

// Import Firebase DB
import firebase from './FirebaseDB.js';

// Import Rounting
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { ParallaxProvider } from 'react-scroll-parallax';

// Parallax Links
import Home from './componets/Home.js';
import DcParallax from './componets/DcParallax.js';
import LrParallax from './componets/LrParallax.js';
import NmParallax from './componets/NmParallax.js';
import SoftwareCreation from './componets/software/SoftwareCreation.js';
import MusicCreation from './componets/MusicCreation.js';
import VideoCreation from './componets/VideoCreation.js';
import MakerCreation from './componets/MakerCreation.js';
import PreciousPlastic from './componets/preciousplastic/PreciousPlastic.js';

// Login Screens
import SignInSide from './componets/software/SignInSide.js';
import SignIn from './componets/software/SignIn.js';
import SignUp from './componets/software/SignUp.js';

// import Material UI
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline, CircularProgress } from '@material-ui/core'

const theme = createMuiTheme();

function App() {

  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then(value => {
      setFirebaseInitialized(value);
    })
  });

  return firebaseInitialized !== false ? (
    <ParallaxProvider>
      <MuiThemeProvider theme={theme}>
  		<CssBaseline />
        <Router>
          <div>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/DcParallax">
                <DcParallax />
              </Route>
              <Route path="/LrParallax">
                <LrParallax />
              </Route>
              <Route path="/NmParallax" >
                <NmParallax />
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
              <Route path="/PreciousPlastic" >
                <PreciousPlastic />
              </Route>
              <Route path="/MusicCreation" >
                <MusicCreation />
              </Route>
              <Route path="/VideoCreation" >
                <VideoCreation />
              </Route>
              <Route path="/MakerCreation" >
                <MakerCreation />
              </Route>
              <Route path="/PreciousPlastic" >
                <PreciousPlastic />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    </ParallaxProvider>
  ) : <div id="loader"><CircularProgress /></div>
}

export default App;
