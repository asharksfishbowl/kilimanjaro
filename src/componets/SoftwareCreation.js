import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Img from 'react-image';
import Shark from '../assets/images/shark.jpg';


function SoftwareCreation() {

  return(
    <ParallaxProvider>
      <Img src={Shark}/>
      <Img src={Shark}/>
      <Img src={Shark}/>
      <Img src={Shark}/>
      <Img src={Shark}/>
      <Img src={Shark}/>
      <Img src={Shark}/>
      <Img src={Shark}/>
    </ParallaxProvider>

  )
}

export default SoftwareCreation;
