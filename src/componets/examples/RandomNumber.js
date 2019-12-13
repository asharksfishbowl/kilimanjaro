import React, { Component } from 'react';
import AnimatedBg from "react-animated-bg";
import Img from 'react-image';
import OopseisImg from '../../assets/images/Oopseis.jpg';

import { Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const numberResult = function(number) {
  let value = (Math.random() * number + 42);
  return value;
}

const scaleImage = function(width, height, maxdim) {
  let scale = maxdim / Math.max(width, height);
  return [scale * width, scale * height];
}

const useStyles = makeStyles(theme => ({
  root: {
    height:'1000px'
  },
  image:{
    position:'relative'
  }
}));

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
    const classes = makeStyles();
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
        this.state.scaleWidth = 250;
      }

      if (this.state.scaleHeight > 1000) {
        this.state.scaleHeight = 100;
      }

      if (this.state.maxdim > 1000) {
        this.state.maxdim = 300;
      }

      this.setState({
        count: 4.20 + this.state.count++,
        scaleWidth: Math.random() + this.state.scaleWidth++,
        scaleHeight: Math.random() + this.state.scaleHeight++,
        maxdim: Math.random() + this.state.maxdim++,
        fontColor:fontColors[Math.floor(Math.random() * Math.floor(5))]
      });
    }.bind(this), 350)

    const imageList = [
      'url("https://images.dog.ceo/breeds/labrador/n02099712_3503.jpg")',
      'url("https://images.dog.ceo/breeds/labrador/n02099712_5844.jpg")',
      'url("https://images.dog.ceo/breeds/labrador/n02099712_5343.jpg")',
      'url("https://images.dog.ceo/breeds/labrador/n02099712_7481.jpg")',
      'url("https://images.dog.ceo/breeds/labrador/n02099712_7414.jpg")'
    ];

    return(
      <AnimatedBg
        colors={imageList}
        duration={10}
        delay={0}
        timingFunction="ease-out"
        >
        <Container className={classes.root} fixed>
          <Typography variant="h2" color={this.state.fontColor}>
            {result}
          </Typography>
        </Container >
      </AnimatedBg>
    )
  }
}

export default RandomNumber;
