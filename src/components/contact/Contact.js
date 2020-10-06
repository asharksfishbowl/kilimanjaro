import React, { useState } from 'react';
import ContactController from './controllers/Contact.js';
// import CRUD from '../../server/CRUD.js';
import Styles from './Styles.js';
import swal from '@sweetalert/with-react';

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
  const [question, setQuestion] = useState('');
  const title = "Got a Question?";
  const feelFree = "Feel free to contact us for any questions, we are happy to answer :)";

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const hideBackdrop = () => {
    setShowBackdrop(false);
  };

  const showBackdrop = () => {
    setShowBackdrop(!backdrop);
  };

  async function save() {
    showBackdrop();
    const to = "asharksfishbowl@gmail.com";
    let record = {
      to,
      email,
      question
    };
    const sendMsg = await ContactController.createQuestion(record);
    if (sendMsg && sendMsg.result) {
      swal('Thanks for the question Shark!', 'We will try our best to get back to you within 24hrs', "success");
    }
    else{
      console.log(sendMsg);
    }
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
              <Typography variant="body1">
                {feelFree}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={onEmailChange}
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder="So we know who to reply to :)"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="question"
                label="Question"
                fullWidth
                multiline
                rows={6}
                rowsMax={6}
                variant="outlined"
                value={question}
                onChange={onQuestionChange}
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
