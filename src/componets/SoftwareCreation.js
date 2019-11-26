import React from 'react';
import { Parallax  } from 'react-scroll-parallax';
import Img from 'react-image';
import Shark from '../assets/images/shark.jpg';


function SoftwareCreation() {
  const sharks = [];
  for (let i = 0; i < 100; i++) {
    sharks.push(<Img src={Shark}/>);
  }
  return(
    <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
      {sharks}
    </Parallax >

  )
}

export default SoftwareCreation;
