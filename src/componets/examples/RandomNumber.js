import React, { Component } from 'react';
import AnimatedBg from "react-animated-bg";
import Img from 'react-image';
import OopseisImg from '../../assets/images/Oopseis.jpg';

import { makeStyleres } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const numberResult = function() {
  let value = (Math.random() * 10);
  setInterval(function () {
    return value + value;
  }, 10);
  return value;
}

const scaleImage = function(width, height, maxdim) {
  let scale = maxdim / Math.max(width, height);
  return [scale * width, scale * height];
}

class RandomNumber extends Component {
  render(){
    let scale = scaleImage(300, 200, 500);
    let result = numberResult();

    return(
      <AnimatedBg
        colors={["red", "salmon", "blue"]}
        duration={0.5}
        delay={4}
        timingFunction="fade-out"
      >
        <Typography variant="h2">
          {result}
        </Typography>
        <br />
        <Img src={OopseisImg} width={scale[0]} height={scale[1]} />
      </AnimatedBg>
    )
  }
}

export default RandomNumber;
