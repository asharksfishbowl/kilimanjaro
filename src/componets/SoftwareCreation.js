import React, { Component } from 'react';
import Img from 'react-image';
import {ParallaxMap} from 'react-parallax-map';
import AspectRatio from 'react-aspect-ratio';

import Shark from '../assets/images/shark.jpg';

let layerTest = [
    { start: 0, end: 100, beginX: 0, x: 0, beginY: 0, y: 0, radius: 0 },
    { start: 100, end: 1000, beginX: 0, x: -3500, beginY: 0, y: -3500, radius: 0, },
    { start: 1000, end: 1300, beginX: -3500, x: -3500, beginY: -3500, y: -3500, radius: 0 },
    { start: 1300, end: 2500, beginX: -3500, x: -6000, beginY: -3500, y: -6000, radius: 0 },
    { start: 2500, end: 2800, beginX: -6000, x: -6000, beginY: -6000, y: -6000, radius: 0 },
    { start: 2800, end: 3500, beginX: -6000, x: -9000, beginY: -6000, y: -3000, radius: 0 },
    { start: 3500, end: 3800, beginX: -9000, x: -9000, beginY: -3000, y: -3000, radius: 0 },
    { start: 3800, end: 4200, beginX: -9000, x: -9500, beginY: -3000, y: -6000, radius: 0 },
    { start: 4200, end: 4500, beginX: -9500, x: -9500, beginY: -6000, y: -6000, radius: 0 },
    { start: 4500, end: 5000, beginX: -9500, x: -11500, beginY: -6000, y: -9000, radius: 0 },
    { start: 5200, end: 5500, beginX: -11500, x: -11500, beginY: -9000, y: -9000, radius: 0 },
];

class SoftwareCreation extends Component {

  constructor(props) {
    super(props);
    this.state = {scrollTop:1};
  }

  render() {
    return(
      <div>
        <ParallaxMap
          map={layerTest}
          currentScroll={this.state.scrollTop}
          layerClassName="test-layer-bg"
          layerZIndex={0}
        />
      <AspectRatio ratio="1/4" style={{ maxWidth: '1000px' }}>
          <Img src={Shark} />
        </AspectRatio>
      </div>
    )
  }
}

export default SoftwareCreation;
