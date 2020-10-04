import React, { useState } from 'react';
// import ContactController from './controllers/Contact.js';
import CRUD from '../../server/CRUD.js';
import Styles from './Styles.js';
// import swal from '@sweetalert/with-react';

// Material UI
import {
  Typography,
  Grid,
  Container,
  TextField,
  Button,
  Backdrop,
  CircularProgress,
  Paper
} from '@material-ui/core';

function Contact(props){
  const classes = Styles();
  const [backdrop, setShowBackdrop] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const title = "Got a Question?";
  const feelFree = "Feel free to contact us for any questions, we are happy to answer :)";

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const hideBackdrop = () => {
    setShowBackdrop(false);
  };

  const showBackdrop = () => {
    setShowBackdrop(!backdrop);
  };

  async function save() {
    showBackdrop();
    let record = {email, message};
    await CRUD.create('contacts', record, "Thanks for the message!", "We will respond within 24 hrs!");
    hideBackdrop();
  }

  return(
    <form
      noValidate
      autoComplete="off"
      onClose = {props.onClose}
      {...props}
      onSubmit={e => e.preventDefault() && false}
    >
      <Paper elevation={3} className={classes.msgBox}>
        <Container maxWidth="lg">
          <Grid container spacing={2} align="left">
            <Grid item xs={12}>
              <Typography variant="h5">
                {title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="overline">
                {feelFree}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={onEmailChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="message"
                label="Message"
                fullWidth
                multiline
                rows={6}
                rowsMax={6}
                variant="outlined"
                value={message}
                onChange={onMessageChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} align="right">
              <Button variant="contained" color="secondary" onClick={save}>
                Send
              </Button>
            </Grid>
          </Grid>
          <Backdrop className={classes.backdrop} open={backdrop} onClick={hideBackdrop}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </Container>
      </Paper>
    </form>
  );
}

export default Contact;
