import React from 'react'
import Button from '@material-ui/core/Button';

function PayPal(props) {
  return (
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="NMEW6UUZ4RB5L" />
      <Button name="submit" type="submit" {...props}>
        Donate
      </Button>
    </form>
  );
}
export default PayPal;
