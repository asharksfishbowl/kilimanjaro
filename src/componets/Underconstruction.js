import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import swal from '@sweetalert/with-react';
import Img from 'react-image';
import UnderconstructionImg from '../assets/images/ASF/Underconstruction.jpg';
import AuthController from './auth/controllers/Auth.js';
import TopBar from './bars/TopBar.js';
import BottomBar from './bars/BottomBar.js';
import Copyright from './Copyright.js';
import Paypal from './donations/PayPal.js';

function Underconstruction(props) {
  let history = useHistory();
  const [animationClass] = useState('background-grad');
  const [taps, setTaps] = useState(0);

  async function trololo() {
    try {
      const displayName = await AuthController.getCurrentDisplayName();
      let title = "Careful tapping him will wake him"
      let message = "You don't want him to sing to you " + displayName + "?";
      let type = "warning";
      setTaps(taps + 1);
      console.log(taps);
      if (taps === 2) {
        title = "That's Okay " + displayName
        message = "You probaly didn't mean to do that :)";
      }
      else if (taps === 3) {
        title = "Okay Now"
        message = "Come on now, please stop " + displayName + " I'm telling you he will sing and we will have to listen";
      }
      else if (taps === 5) {
        title = "Like Stop"
        message = displayName + " This is like two seconds for you too just turn away";
      }
      else if (taps === 7) {
        title = "Seriously Stop"
        message = displayName + " I'm surprized you even got this far";
      }
      else if (taps === 9) {
        title = "SERIOUSLY STOP"
        message = displayName + " He is going to SING!!!!";
      }
      else if (taps === 10 || taps > 10) {
        title = "Ya done did it now!"
        message = "Ohh no " + displayName + " you woke the troll, now we make listen again";
        type = "error";
      }
      swal(title, message, type, {
        buttons: {
          cancel: "Run away!",
          catch: {
            text: "Keep Staying",
            value: "tap",
          }
        },
      }).then((value) => {
        switch (value) {
          case "tap":
            console.log(taps);
            if (taps === 10 || taps > 10) {
              history.push('/trololo');
            }
            break;
          default:
            swal("Got away safely!", "whooo, That was close :)");
            history.push('/');
        }
      });
    } catch (error) {
      console.log(error.message);
      history.push('/');
    }
  }

  return(
    <div className={animationClass}>
      <TopBar />
      <Img src={UnderconstructionImg} className="App-underconstruction" alt="Underconstruction" onClick={trololo}/>
      <BottomBar title=<Copyright color='secondary'/> rightSide=<Paypal variant="contained" color="secondary"/> />
    </div>
  )
}

export default Underconstruction;
