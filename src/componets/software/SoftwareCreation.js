import React, { Component } from 'react';
import Img from 'react-image';
import AspectRatio from 'react-aspect-ratio';

import Typography from '@material-ui/core/Typography';
import TopBar from '../bars/TopBar.js';
import BottomBar from '../bars/BottomBar.js';
import Copyright from '../Copyright.js';

import Shark from '../../assets/images/shark.jpg';
import Course from './Course.js';

class SoftwareCreation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scrollTop:1
    };
  }

  render() {

    return(
      <div>
        <TopBar />
        <Typography variant="h2" gutterBottom>
          Course Structure
        </Typography>
        <Course />
        <AspectRatio ratio="1/4" style={{ maxWidth: '1000px' }}>
          <Img src={Shark} />
        </AspectRatio>
        <BottomBar title=<Copyright color='secondary'/> />
      </div>
    )
  }
}

export default SoftwareCreation;
