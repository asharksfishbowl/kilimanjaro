import React, { Component } from 'react';
import Img from 'react-image';
import OopseisImg from '../assets/images/Oopseis.jpg';

class Oopseis extends Component {
  render() {
    return(
      <div>
        <Img src={OopseisImg} />
      </div>
    )
  }
}

export default Oopseis;
