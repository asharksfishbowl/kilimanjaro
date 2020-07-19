import React from 'react';
import { useHistory } from "react-router-dom";
import Img from 'react-image';
import UnderconstructionImg from '../assets/images/ASF/Underconstruction.jpg';
import AuthController from './auth/controllers/Auth.js';

function Underconstruction(props) {
  let history = useHistory();

  async function trololo() {
    try {
      await AuthController.getCurrentUsername();
      history.push('/trololo');
    } catch (error) {
      console.log(error.message);
      history.push('/trololo');
    }
  }

  return(
    <div>
      <Img src={UnderconstructionImg} className="App-underconstruction" alt="Underconstruction" onClick={trololo}/>
    </div>
  )
}

export default Underconstruction;
