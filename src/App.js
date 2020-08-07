// Import React
import React, { useState, useEffect } from 'react';

// Import Firebase
// import firebase from './firebase.js';
import Auth from './componets/auth/controllers/Auth.js';

// Import Rounting
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Parallax Links
import DcParallax from './componets/DcParallax.js';
import LrParallax from './componets/LrParallax.js';
import NmParallax from './componets/NmParallax.js';

// Componet Links
import Home from './componets/home/Home.js';
import Founders from './componets/founders/Founders.js';
import Dashboard from './componets/dashboard/Dashboard.js';
import Courses from './componets/courses/Course.js';
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

  const checkIfLoggedIn = () => {
    if (Auth.isLoggedIn()) {
      return <Redirect to="/dashboard" />
    }
  }

  return firebaseInitialized !== false ? (
      <MuiThemeProvider theme={theme}>
  		<CssBaseline />
        <Router>
          <div>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/Founders" component={Founders} />
              <Route path="/DcParallax" component={DcParallax} />
              <Route path="/LrParallax" component={LrParallax} />
              <Route path="/NmParallax" component={NmParallax} />
              <Route path="/Courses" component={Courses} />
              <Route path="/SignInSide" component={SignInSide} />
              <Route path="/SignIn" component={SignIn} />
              <Route path="/SignUp" component={SignUp} />
              <Route path="/Dashboard" component={Dashboard} />
              <Route path="/PreciousPlastic" component={PreciousPlastic} />
              <Route path="/Music" component={Underconstruction} />
              <Route path="/VideoCreation" component={Underconstruction} />
              <Route path="/DIY" component={Underconstruction} />
              <Route path="/Cooking" component={Underconstruction} />
              <Route path='/trololo' component={() => {
                   window.location.href = 'https://www.youtube.com/watch?v=2Z4m4lnjxkY';
                   return null;
              }}/>
              <Route path="/" component={Home} onEnter={checkIfLoggedIn()}/>
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
