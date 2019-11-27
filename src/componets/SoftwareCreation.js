import React from 'react';
import { ParallaxMap } from 'react-parallax-map';
import Img from 'react-image';
import Shark from '../assets/images/shark.jpg';

function SoftwareCreation() {
  const sharks = [];
  for (let i = 0; i < 10; i++) {
    sharks.push(<Img src={Shark} height="100%" width="100%"/>);
  }
  //Creating a map for layer
  const layerData = [
    {
        start: 0,
        end: 1000,
        beginX: 0,
        beginY: 0,
        x: 0,
        y: -400,
        radius: 500,
        direction: true,
        angle: -100,
        step: 0.15
    },
    {
        start: 1000,
        end: 2500,
        beginX: -537,
        beginY: -682,
        x: -2000,
        y: -700,
        radius: 500,
        direction: false,
        angle: -280,
        step: 0.15
    }, {
        start: 2500,
        end: 3800,
        beginX: -2538,
        beginY: -981,
        x: -1800,
        y: -2500,
        radius: 500,
        direction: false,
        angle: -180,
        step: 0.15
    }, {
        start: 3800,
        end: 5200,
        beginX: -1429,
        beginY: -2981,
        x: -300,
        y: -2600,
        radius: 0
    }
];
  return(
    <div>
      <ParallaxMap
        map={layerData}
        currentScroll={0}
        layerClassName="test-layer-bg"
        layerZIndex={1}
       >
        <div><Img src={Shark} height="200%" width="200%"/></div>
      </ParallaxMap>
    </div>
  )
}

export default SoftwareCreation;
