import React, { Component } from 'react';
import Img from 'react-image';
import UnderconstructionImg from '../assets/images/ASF/Underconstruction.jpg';

class Underconstruction extends Component {
  render() {
    return(
      <div>
        <Img src={UnderconstructionImg} className="App-underconstruction" alt="Underconstruction" />
      </div>
    )
  }
}

export default Underconstruction;
