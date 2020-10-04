import React from 'react'
import { Switch, Route } from "react-router-dom";

// Parallax Links
import DcParallax from '../components/DcParallax.js';
import LrParallax from '../components/LrParallax.js';
import NmParallax from '../components/NmParallax.js';

// Pages Links
import Company from '../components/pages/company/Company.js';

// Componet Links
import Home from '../components/home/Home.js';
import Founders from '../components/founders/Founders.js';
import Dashboard from '../components/dashboard/Dashboard.js';
import Admin from '../components/admin/Admin.js';
import Courses from '../components/courses/Course.js';
import PreciousPlastic from '../components/preciousplastic/PreciousPlastic.js';

// Helper Componets
import Underconstruction from '../components/Underconstruction.js';

// Login Screens
import SignInSide from '../components/auth/SignInSide.js';
import SignIn from '../components/auth/SignIn.js';
import SignUp from '../components/auth/SignUp.js';

function Routes(props) {
  return(
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
      <Route path="/Admin" component={Admin} />
      <Route path="/PreciousPlastic" component={PreciousPlastic} />
      <Route path="/Music" component={Underconstruction} />
      <Route path="/VideoCreation" component={Underconstruction} />
      <Route path="/DIY" component={Underconstruction} />
      <Route path="/Cooking" component={Underconstruction} />
      <Route path='/trololo' component={() => {
           window.location.href = 'https://www.youtube.com/watch?v=2Z4m4lnjxkY';
           return null;
      }}/>
      <Route path="/home" component={Home} />
      <Route path="/" component={Company} onEnter={props.checkIfLoggedIn()}/>
    </Switch>
  )
}
export default Routes;
