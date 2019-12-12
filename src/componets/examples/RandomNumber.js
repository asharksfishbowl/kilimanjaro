import React, { Component } from 'react';
import Img from 'react-image';
import OopseisImg from '../../assets/images/Oopseis.jpg';

let x = 2;
let y = 8;
const a = function(b) { return function(c) { return x + y + Math.abs(b) + c; } };

// Statement will go here
y = 4.2;

const fn = a(x);
x = 4 / 0.69;
const result = fn(Math.random() * 10);

const scaleImage = function(width, height, maxdim) {
  let scale = maxdim / Math.max(width, height);
  return [scale * width, scale * height];
}

class RandomNumber extends Component {
  render(){
    let scale = scaleImage(300, 200, 500);
    return(
      <div>
        {result}
        <br />
        <Img src={OopseisImg} width={scale[0]} height={scale[1]} />
      </div>
    )
  }
}

export default RandomNumber;
