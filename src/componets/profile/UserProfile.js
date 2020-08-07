import React, { Component } from 'react';
import Img from 'react-image';
import AspectRatio from 'react-aspect-ratio';

import Typography from '@material-ui/core/Typography';
import AppBar from '../AppBar.js';

class UserProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scrollTop:1
    };
  }

  render() {

    return(
      <div>
        <AppBar />
      </div>
    )
  }
}

export default UserProfile;
