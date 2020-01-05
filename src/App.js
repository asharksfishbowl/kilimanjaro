import React from 'react';

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

function App() {

  return (
    <ParallaxProvider>
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
          <Route path="/MusicCreation" >
            <MusicCreation />
          </Route>
          <Route path="/VideoCreation" >
            <VideoCreation />
          </Route>
          <Route path="/MakerCreation" >
            <MakerCreation />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </ParallaxProvider>
  );
}

export default App;
