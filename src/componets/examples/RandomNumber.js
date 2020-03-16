import React, { Component } from 'react';
import AnimatedBg from "react-animated-bg";
import Typography from '@material-ui/core/Typography';

const numberResult = function(number) {
  let value = (Math.random() * number + 42);
  return value;
}

const scaleImage = function(width, height, maxdim) {
  let scale = maxdim / Math.max(width, height);
  return [scale * width, scale * height];
}

class RandomNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      scaleWidth:300,
      scaleHeight:200,
      maxdim:500,
      fontColor:'primary'
    };
  };

  render(){
    let scale = scaleImage(this.state.scaleWidth, this.state.scaleHeight, this.state.maxdim);
    let result = numberResult(this.state.count);

    setTimeout(function () {

      const fontColors = [
        'primary',
        'secondary',
        'textPrimary',
        'textSecondary',
        'error'
      ];

      if (this.state.scaleWidth > 1000) {
        this.setState({scaleWidth:250});
      }

      if (this.state.scaleHeight > 1000) {
        this.setState({scaleHeight:100});
      }

      if (this.state.maxdim > 1000) {
        this.setState({maxdim:300});
      }

      this.setState({
        count: (420 + 69 + this.state.count++) / 100,
        scaleWidth: Math.random() + this.state.scaleWidth++,
        scaleHeight: Math.random() + this.state.scaleHeight++,
        maxdim: Math.random() + this.state.maxdim++,
        fontColor:fontColors[Math.floor(Math.random() * Math.floor(5))]
      });
    }.bind(this), 1000)

    const imageList = [
      'url(https://source.unsplash.com/featured/?animal,shark)',
      'url(https://source.unsplash.com/featured/?animal,cougar)',
      'url(https://source.unsplash.com/featured/?animal,wolf)',
      'url(https://source.unsplash.com/featured/?animal,fox)',
      'url(https://source.unsplash.com/featured/?animal,bear)',
      'url(https://source.unsplash.com/featured/?animal,snake)',
      'url(https://source.unsplash.com/featured/?animal,snail)',
      'url(https://source.unsplash.com/featured/?animal,sloth)',
      'url(https://source.unsplash.com/featured/?animal,dog)',
      'url(https://source.unsplash.com/featured/?animal,cat)',
    ];

    return(
      <AnimatedBg
        colors={imageList}
        duration={5}
        delay={1}
        timingFunction="ease-out"
        className="animated-background"
        randomMode
        >
        <Typography color={this.state.fontColor}>
          {result}
        </Typography>
      </AnimatedBg>
    )
  }
}

export default RandomNumber;
