import React, { useState } from 'react'
import Styles from './Styles.js';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';

import { CoffeeLoading } from 'react-loadingg';

function PayPal(props) {
  const classes = Styles();
  const [backdrop, setShowBackdrop] = useState(false);
  const hideBackdrop = () => {
    setShowBackdrop(false);
  };

  const showBackdrop = () => {
    setShowBackdrop(!backdrop);
  };

  return (
    <div>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="NMEW6UUZ4RB5L" />
        <Button name="submit" type="submit" {...props} onClick={showBackdrop}>
          Donate
        </Button>
      </form>
      <Backdrop className={classes().backdrop} open={backdrop} onClick={hideBackdrop}>
        <CoffeeLoading />
      </Backdrop>
    </div>
  );
}
export default PayPal;
