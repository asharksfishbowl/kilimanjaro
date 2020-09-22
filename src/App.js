// Import React
import React, { useState, useEffect } from 'react';
import Auth from './components/auth/controllers/Auth.js';

// Import Rounting
import {
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import Routes from './routes/Routes.js';

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
            <Routes checkIfLoggedIn={checkIfLoggedIn}/>
          </div>
        </Router>
      </MuiThemeProvider>
  ) :
  <div id="loader" className={animationClass} style={{animation: easings.easeInSine}}>
      <CoffeeLoading />
  </div>
}

export default App;
