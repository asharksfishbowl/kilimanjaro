import React from 'react';

// Import Rounting
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Parallax Links
import Home from './componets/Home.js';
import DcParallax from './componets/DcParallax.js';

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/DcParallax">
            <DcParallax />
          </Route>
          <Route path="/LrParallax">
            <DcParallax />
          </Route>
          <Route path="/NmParallax" >
            <DcParallax />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
