import React, { Component } from 'react';
import { useHistory } from "react-router-dom";
import Img from 'react-image';
import UnderconstructionImg from '../assets/images/ASF/Underconstruction.jpg';

class Underconstruction extends Component {
  render() {
    return(
      <div>
        <Img src={UnderconstructionImg} className="App-underconstruction" alt="Underconstruction" onClick={trololo => { 
          window.location.href = "https://www.youtube.com/watch?v=2Z4m4lnjxkY";
        }}/>
      </div>
    )
  }
}

export default Underconstruction;
